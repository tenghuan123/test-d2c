const fs = require('fs');
const path = require('path');
const projectRoot = '/Users/tenghuan/programming/vjshi/code/test-d2c';

const structurePath = path.join(projectRoot, 'dsl/snapshots/structure.latest.json');
const structure = JSON.parse(fs.readFileSync(structurePath, 'utf-8'));

const envPath = path.join(projectRoot, '.env');
const envContent = fs.readFileSync(envPath, 'utf-8');
const apiKeyMatch = envContent.match(/OPENAI_API_KEY=(.+)/);
const OPENAI_API_KEY = apiKeyMatch ? apiKeyMatch[1].trim() : null;

const USE_RULES = true; // 设为 false 则跳过规则，直接用 AI

const QUICK_RULES = [
  { pattern: /header|导航|nav|跟随/i, role: "Header" },
  { pattern: /footer|底部|版权|copyright/i, role: "Footer" },
  { pattern: /列表|list|侧边/i, role: "List" },
  { pattern: /卡片|card|案例/i, role: "Card" },
  { pattern: /按钮|button|提交|son/i, role: "Button" },
  { pattern: /标题|title|标题/i, role: "Title" },
  { pattern: /图|image|img|图片|素材|矩形/i, role: "Image" },
  { pattern: /icon|图标/i, role: "Icon" },
  { pattern: /标签|tag/i, role: "Badge" },
  { pattern: /搜索|search/i, role: "SearchBar" },
  { pattern: /输入|input|表单/i, role: "Input" },
  { pattern: /描述|description|正文|信息/i, role: "Description" },
  { pattern: /logo/i, role: "Logo" },
  { pattern: /choice|作品/i, role: "Nav" },
  { pattern: /container|容器|容器\s/i, role: "Container" },
  { pattern: /我的素材/i, role: "ActionButton" },
  { pattern: /广告/i, role: "Banner" },
  { pattern: /用户建议/i, role: "Link" },
];

const ALLOWED_ROLES = ["Header", "Footer", "Section", "List", "Card", "Button", "Title", "Description", "Image", "Icon", "Badge", "Nav", "SearchBar", "ActionButton", "Input", "Logo", "Container", "Banner", "Link", "Text"];

// AI 增强推断 (支持 OpenRouter)
async function aiInferRole(nodes) {
  if (!OPENAI_API_KEY || nodes.length === 0) return {};

  const prompt = `分析以下 DSL 节点，推断语义角色。

AllowedRoles: ${ALLOWED_ROLES.join(", ")}

规则：
1. 禁止视觉词：BlueBox、Group1、TopArea、Container1、矩形
2. depth ≤ 5
3. 结构冻结后不可修改父节点

输入（JSON 数组，每个节点有 name、nodeType、layoutStyle）：
${JSON.stringify(nodes, null, 2)}

输出纯 JSON 数组（不要 markdown）：
[
  { "id": "node_id", "role": "Card", "confidence": 0.9 },
  ...
]`;

  try {
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${OPENAI_API_KEY}`,
        "Content-Type": "application/json",
        "X-Title": "DSL Semantic Inference"
      },
      body: JSON.stringify({
        model: "openai/gpt-4o-mini",
        messages: [{ role: "user", content: prompt }],
        temperature: 0.3,
        max_tokens: 4000
      })
    });

    if (!response.ok) {
      console.error("OpenAI API error:", response.status);
      return {};
    }

    const data = await response.json();
    const content = data.choices?.[0]?.message?.content;

    if (content) {
      const results = JSON.parse(content);
      const map = {};
      for (const item of results) {
        if (item.id && item.role && ALLOWED_ROLES.includes(item.role)) {
          map[item.id] = { role: item.role, confidence: item.confidence || 0.8 };
        }
      }
      return map;
    }
  } catch (err) {
    console.error("AI inference error:", err.message);
  }

  return {};
}

let globalRefCount = {};

function inferRole(name, ext, depth, parentRole) {
  if (!name) return null;

  // 如果关闭规则，则跳过
  if (!USE_RULES) return null;

  for (const rule of QUICK_RULES) {
    if (rule.pattern.test(name)) {
      return { role: rule.role, confidence: 0.85 };
    }
  }
  
  if (ext?.layoutStyle) {
    const { relativeY, width, height } = ext.layoutStyle;
    if (relativeY !== null && relativeY < 100 && depth <= 1) {
      return { role: "Header", confidence: 0.7 };
    }
    if (relativeY !== null && relativeY > 2000 && depth <= 1) {
      return { role: "Footer", confidence: 0.7 };
    }
    if (width > 1000 && height > 400 && !ext.borderRadius) {
      return { role: "Section", confidence: 0.6 };
    }
  }
  
  if (ext?.flexContainerInfo?.flexDirection === "row" && ext?.children?.length > 3) {
    return { role: "List", confidence: 0.7 };
  }
  if (ext?.borderRadius && ext?.children?.length >= 2 && ext?.flexContainerInfo) {
    return { role: "Card", confidence: 0.7 };
  }
  
  return null;
}

// 收集需要 AI 推断的节点（confidence < 0.7）
function collectLowConfidenceNodes(tree, nodes = [], depth = 0) {
  if (depth > 5) return nodes;
  
  // 如果关闭规则，所有节点都需要 AI 推断
  const threshold = USE_RULES ? 0.7 : 0.99;
  
  if (tree.confidence < threshold && tree.id && !tree.id.startsWith('inline_')) {
    nodes.push({
      id: tree.id,
      name: tree.name,
      nodeType: tree.ext?.layoutStyle ? 'FRAME' : 'COMPONENT',
      layoutStyle: tree.ext?.layoutStyle,
      flexContainerInfo: tree.ext?.flexContainerInfo,
      borderRadius: tree.ext?.borderRadius,
      childCount: tree.children?.length || 0
    });
  }
  if (tree.children) {
    for (const child of tree.children) {
      collectLowConfidenceNodes(child, nodes, depth + 1);
    }
  }
  return nodes;
}

// 用 AI 结果更新树
function applyAiResults(tree, aiResults) {
  if (aiResults[tree.id]) {
    tree.role = aiResults[tree.id].role;
    tree.confidence = aiResults[tree.id].confidence;
    tree.fromAi = true;
  }
  if (tree.children) {
    for (const child of tree.children) {
      applyAiResults(child, aiResults);
    }
  }
  return tree;
}

function loadComponentDefinition(refId) {
  const compPath = path.join(projectRoot, `dsl/definitions/components/${refId}.json`);
  if (fs.existsSync(compPath)) {
    return JSON.parse(fs.readFileSync(compPath, 'utf-8'));
  }
  return null;
}

// 递归构建带role的树
function buildSemanticTree(node, depth = 0, parentRole = null) {
  if (depth > 10) return null;
  
  const name = node.name || node.ref || node.id;
  const ext = node.ext || node.container?.ext;
  const children = node.children || [];
  
  const inferred = inferRole(name, ext, depth, parentRole);
  const role = inferred?.role || (depth === 0 ? "Section" : "Container");
  const confidence = inferred?.confidence || 0.5;
  
  const result = {
    id: node.id,
    role,
    confidence,
    name
  };
  
  if (children.length > 0) {
    result.children = [];
    for (const child of children) {
      const childTree = buildSemanticTree(child, depth + 1, role);
      if (childTree) {
        result.children.push(childTree);
      }
    }
  }
  
  return result;
}

// 加载module的完整结构
function loadModuleStructure(mod) {
  const root = {
    id: mod.id,
    name: mod.container?.name || mod.id,
    ext: mod.container?.ext,
    children: []
  };
  
  if (mod.children) {
    for (const child of mod.children) {
      if (child.type === 'component') {
        const compDef = loadComponentDefinition(child.ref);
        if (compDef?.structure) {
          const compNode = {
            id: child.ref,
            name: compDef.structure.name,
            ext: compDef.structure.ext,
            children: []
          };
          
          // 递归加载component的所有children
          function loadChildren(sourceNode, targetNode) {
            if (sourceNode.children) {
              for (const child of sourceNode.children) {
                const childNode = {
                  id: child.ref || `inline_${child.name}_${Math.random().toString(36).substr(2, 9)}`,
                  name: child.name || child.ref || 'Unknown',
                  ext: child.ext,
                  children: []
                };
                targetNode.children.push(childNode);
                loadChildren(child, childNode);
              }
            }
          }
          
          loadChildren(compDef.structure, compNode);
          root.children.push(compNode);
        }
      }
    }
  }
  
  return root;
}

function generateComponentMap() {
  // 统计ref出现次数 - 使用全局变量
  globalRefCount = globalRefCount || {};
  
  function countRefs(tree) {
    if (globalRefCount[tree.id]) {
      globalRefCount[tree.id]++;
    } else {
      globalRefCount[tree.id] = 1;
    }
    if (tree.children) {
      for (const child of tree.children) {
        countRefs(child);
      }
    }
  }
  
  for (const mod of structure.modules) {
    const modStructure = loadModuleStructure(mod);
    const semanticTree = buildSemanticTree(modStructure, 0);
    countRefs(semanticTree);
  }
  
  // 找出出现>=2次的组件
  const components = [];
  for (const [id, count] of Object.entries(globalRefCount)) {
    if (count >= 2 && !id.startsWith('inline_')) {
      components.push({
        name: `Component_${id.substring(0, 12)}`,
        fromNodes: [id],
        count,
        similarity: 1.0
      });
    }
  }
  
  return { components };
}

(async () => {
  console.log('Building semantic tree...');
  
  const modules = [];
  
  // 先用规则推断
  for (const mod of structure.modules) {
    const modStructure = loadModuleStructure(mod);
    const semanticTree = buildSemanticTree(modStructure, 0);
    modules.push(semanticTree);
  }

  // 收集低置信度节点，用 AI 增强
  if (OPENAI_API_KEY) {
    console.log('Running AI enhancement...');
    const allLowConfNodes = [];
    for (const mod of modules) {
      collectLowConfidenceNodes(mod, allLowConfNodes);
    }

    // 找到最深分支的节点
    function findDeepestPath(tree, currentPath = [], maxDepth = { depth: 0, paths: [] }) {
      const newPath = [...currentPath, { id: tree.id, name: tree.name, ext: tree.ext, childCount: tree.children?.length || 0 }];
      
      if (!tree.children || tree.children.length === 0) {
        if (newPath.length > maxDepth.depth) {
          maxDepth.depth = newPath.length;
          maxDepth.paths = [newPath];
        } else if (newPath.length === maxDepth.depth) {
          maxDepth.paths.push(newPath);
        }
      } else {
        for (const child of tree.children) {
          findDeepestPath(child, newPath, maxDepth);
        }
      }
      return maxDepth;
    }

    // 收集最深路径上的所有节点
    const allDeepestNodes = [];
    for (const mod of modules) {
      const deepest = findDeepestPath(mod);
      console.log(`Found deepest path depth: ${deepest.depth}, paths: ${deepest.paths.length}`);
      for (const path of deepest.paths) {
        for (const node of path) {
          if (!node.id.startsWith('inline_')) {
            allDeepestNodes.push(node);
          }
        }
      }
    }

    // 限制 AI 调用数量
    const limitedNodes = allDeepestNodes.slice(0, 50);
    console.log(`AI inference for ${limitedNodes.length} deepest nodes...`);
    
    const aiResults = await aiInferRole(limitedNodes);
    console.log(`AI inferred ${Object.keys(aiResults).length} nodes`);
    
    // 应用 AI 结果
    for (const mod of modules) {
      applyAiResults(mod, aiResults);
    }
  } else {
    console.log('No OPENAI_API_KEY, skipping AI enhancement');
  }
  
  const skeleton = { modules };
  
  const componentMap = generateComponentMap();
  
  // 写入文件
  fs.writeFileSync(
    path.join(projectRoot, 'dsl/snapshots/semantic-skeleton.json'),
    JSON.stringify(skeleton, null, 2)
  );
  
  fs.writeFileSync(
    path.join(projectRoot, 'dsl/snapshots/component-map.json'),
    JSON.stringify(componentMap, null, 2)
  );
  
  // 输出统计
  function countRoles(tree, depth = 0) {
    const stats = {};
    if (depth <= 5) {
      stats[tree.role] = (stats[tree.role] || 0) + 1;
    }
    if (tree.children) {
      for (const child of tree.children) {
        const childStats = countRoles(child, depth + 1);
        for (const [role, count] of Object.entries(childStats)) {
          stats[role] = (stats[role] || 0) + count;
        }
      }
    }
    return stats;
  }
  
  const allStats = {};
  for (const mod of modules) {
    const stats = countRoles(mod);
    for (const [role, count] of Object.entries(stats)) {
      allStats[role] = (allStats[role] || 0) + count;
    }
  }
  
  console.log('\nRole statistics:', allStats);
  console.log('\nDone! Files written:');
  console.log('- dsl/snapshots/semantic-skeleton.json');
  console.log('- dsl/snapshots/component-map.json');
})();
