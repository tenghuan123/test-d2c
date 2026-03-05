/**
 * DSL 语义编译算法 v1.0
 * 按 tree-dfs-and-bfs.md 规范实现
 * 
 * Stage 1: Shallow BFS (maxDepth=2) - 宏观扫描
 * Stage 2: Skeleton Freeze - 结构冻结
 * Stage 3: Targeted DFS (maxDepth=5) - 局部深度
 * Stage 4: Repetition Detection - 组件抽象
 * Stage 5: Code Generation (optional)
 */

const fs = require('fs');
const path = require('path');
const projectRoot = '/Users/tenghuan/programming/vjshi/code/test-d2c';

// ==================== 配置 ====================
const BFS_MAX_DEPTH = 5;   // Stage 1: 宏观扫描深度
const DFS_MAX_DEPTH = 10;   // Stage 3: 微观递归深度
const MIN_REPEAT_COUNT = 5; // Stage 4: 最小重复次数
const SIMILARITY_THRESHOLD = 0.85; // 相似度阈值
const CONFIDENCE_THRESHOLD = Number(process.env.CONFIDENCE_THRESHOLD || 0.6);
const ONLY_USE_AI = false; // 是否只使用 AI 推断

const ALLOWED_ROLES = [
  "Header", "Footer", "Section", "List", "Card", "Button", 
  "Title", "Description", "Image", "Icon", "Badge", "Nav", 
  "SearchBar", "ActionButton", "Input", "Logo", "Container", 
  "Banner", "Link", "Text", "Content", "Sidebar", "Hero", "FilterBar", "Form"
];

// ==================== 加载数据 ====================
const structurePath = path.join(projectRoot, 'dsl/snapshots/structure.latest.json');
const structure = JSON.parse(fs.readFileSync(structurePath, 'utf-8'));

const envPath = path.join(projectRoot, '.env');
const envContent = fs.readFileSync(envPath, 'utf-8');
const apiKeyMatch = envContent.match(/OPENAI_API_KEY=(.+)/);
const OPENAI_API_KEY = apiKeyMatch ? apiKeyMatch[1].trim() : null;

// ==================== 规则推断 ====================
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
  { pattern: /筛选|filter/i, role: "FilterBar" },
  { pattern: /英雄|banner|首屏/i, role: "Hero" },
];

function inferRoleByRule(name, ext, depth, parentRole) {
  if (!name) return null;
  
  for (const rule of QUICK_RULES) {
    if (rule.pattern.test(name)) {
      return { role: rule.role, confidence: 0.85, source: 'rule' };
    }
  }
  
  // 位置推断
  if (ext?.layoutStyle) {
    const { relativeY } = ext.layoutStyle;
    if (relativeY !== null && relativeY < 100 && depth <= 1) {
      return { role: "Header", confidence: 0.7, source: 'rule' };
    }
    if (relativeY !== null && relativeY > 2000 && depth <= 1) {
      return { role: "Footer", confidence: 0.7, source: 'rule' };
    }
  }
  
  return null;
}

// ==================== Stage 1: Shallow BFS ====================
/**
 * 加载完整模块结构（包含深层 children）
 */
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
          
          loadChildrenRecursive(compDef.structure, compNode, 0);
          root.children.push(compNode);
        }
      }
    }
  }
  
  return root;
}

function loadComponentDefinition(refId) {
  const compPath = path.join(projectRoot, `dsl/definitions/components/${refId}.json`);
  if (fs.existsSync(compPath)) {
    return JSON.parse(fs.readFileSync(compPath, 'utf-8'));
  }
  return null;
}

function loadChildrenRecursive(sourceNode, targetNode, depth) {
  if (depth > DFS_MAX_DEPTH || !sourceNode.children) return;
  
  for (const child of sourceNode.children) {
    const childNode = {
      id: child.ref || `inline_${child.name}_${Math.random().toString(36).substr(2, 9)}`,
      name: child.name || child.ref || 'Unknown',
      ext: child.ext,
      children: []
    };
    targetNode.children.push(childNode);
    loadChildrenRecursive(child, childNode, depth + 1);
  }
}

/**
 * Stage 1: Shallow BFS - 只标记 depth，不截断树
 * 宏观扫描：识别 Level 0-2 的角色
 */
function stage1ShallowBFS(tree, currentDepth = 0) {
  const result = {
    id: tree.id,
    name: tree.name,
    ext: tree.ext,
    depth: currentDepth,
    children: []
  };
  
  // 继续递归加载所有子节点，传递深度
  if (tree.children) {
    for (const child of tree.children) {
      result.children.push(stage1ShallowBFS(child, currentDepth + 1));
    }
  }
  
  return result;
}

/**
 * Stage 1: 为所有 Level 0-2 节点推断角色
 */
function stage1InferRoles(shallowTree, depth = 0, parentRole = null) {
  // 如果 ONLY_USE_AI，则跳过规则推断
  let inferred = null;
  if (!ONLY_USE_AI) {
    inferred = inferRoleByRule(shallowTree.name, shallowTree.ext, depth, parentRole);
  }
  
  shallowTree.role = inferred?.role || (depth === 0 ? "Section" : "Container");
  shallowTree.confidence = inferred?.confidence || 0.3; // AI 推断时降低默认置信度
  shallowTree.roleSource = inferred?.source || 'default';
  shallowTree.depth = depth;
  
  // 标记需要深度搜索的节点
  shallowTree.needsDeepSearch = ['Content', 'List', 'Section', 'Card'].includes(shallowTree.role);
  
  if (shallowTree.children) {
    for (const child of shallowTree.children) {
      stage1InferRoles(child, depth + 1, shallowTree.role);
    }
  }
  
  return shallowTree;
}

// ==================== Stage 2: Skeleton Freeze ====================
/**
 * Stage 2: 冻结结构
 * 标记 frozen 状态，后续不可修改
 */
function stage2Freeze(skeleton) {
  skeleton.frozen = true;
  skeleton.roleFrozen = skeleton.role;
  
  if (skeleton.children) {
    for (const child of skeleton.children) {
      stage2Freeze(child);
    }
  }
  
  return skeleton;
}

// ==================== Stage 3: Targeted DFS ====================
/**
 * 收集需要深度搜索的节点（只对 Content/List/Section/Card）
 */
function collectDeepSearchNodes(tree, nodes = [], currentDepth = 0) {
  if (currentDepth > DFS_MAX_DEPTH) return nodes;

  // 如果 ONLY_USE_AI，则收集所有非 inline 节点
  const lowConfidence = Number.isFinite(tree.confidence) && tree.confidence < CONFIDENCE_THRESHOLD;
  const shouldCollect = ONLY_USE_AI 
    ? (currentDepth > 0 && tree.id && !tree.id.startsWith('inline_'))
    : ((tree.needsDeepSearch || lowConfidence) && currentDepth > 0);
    
  if (shouldCollect) {
    nodes.push({
      id: tree.id,
      name: tree.name,
      ext: tree.ext,
      parentRole: tree.role,
      depth: currentDepth,
      childCount: tree.children?.length || 0,
      children: tree.children?.slice(0, 3).map(c => ({
        id: c.id,
        name: c.name,
        role: c.role
      }))
    });
  }
  
  if (tree.children) {
    for (const child of tree.children) {
      collectDeepSearchNodes(child, nodes, currentDepth + 1);
    }
  }
  
  return nodes;
}

/**
 * AI 增强推断（支持 OpenRouter）
 */
async function aiInferRoles(nodes) {
  if (!OPENAI_API_KEY || nodes.length === 0) return {};
  
  const prompt = `分析以下 DSL 节点，推断语义角色。

AllowedRoles: ${ALLOWED_ROLES.join(", ")}

规则：
1. 禁止视觉词：BlueBox、Group1、TopArea、Container1、矩形
2. 只对 Content/List/Section/Card 的子节点推断
3. 结构冻结后不可修改父节点

输入（JSON 数组）：
${JSON.stringify(nodes, null, 2)}

输出纯 JSON 数组：
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
        "HTTP-Referer": "https://vjshi.com",
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
      // 尝试提取 JSON 数组
      let jsonStr = content.trim();
      
      // 如果 AI 返回了额外文字，尝试提取 JSON 部分
      const jsonMatch = jsonStr.match(/\[[\s\S]*\]/);
      if (jsonMatch) {
        jsonStr = jsonMatch[0];
      }
      
      const results = JSON.parse(jsonStr);
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

/**
 * Stage 3: Targeted DFS - 应用 AI 结果到深层节点
 */
function stage3ApplyAiResults(tree, aiResults, currentDepth = 0) {
  if (aiResults[tree.id] && currentDepth > 0) {
    tree.role = aiResults[tree.id].role;
    tree.confidence = aiResults[tree.id].confidence;
    tree.roleSource = 'ai';
  }
  
  if (tree.children) {
    for (const child of tree.children) {
      stage3ApplyAiResults(child, aiResults, currentDepth + 1);
    }
  }
  
  return tree;
}

// ==================== Stage 4: Repetition Detection ====================
/**
 * 提取节点结构签名（用于结构相似度检测）
 */
function extractSignature(tree) {
  // 只对非 inline 节点生成签名
  if (!tree.id || tree.id.startsWith('inline_')) {
    return null;
  }
  
  const sig = {
    role: tree.role,
    childCount: tree.children?.length || 0,
    childRoles: tree.children?.slice(0, 5).map(c => c.role).sort(),
    ext: tree.ext ? {
      hasBorderRadius: !!tree.ext.borderRadius,
      hasFlex: !!tree.ext.flexContainerInfo,
      flexDirection: tree.ext.flexContainerInfo?.flexDirection
    } : null
  };
  return JSON.stringify(sig);
}

/**
 * 计算结构相似度
 */
function calculateSimilarity(sig1, sig2) {
  if (sig1.role !== sig2.role) return 0;
  
  const roleMatch = sig1.childRoles.filter(r => sig2.childRoles.includes(r)).length;
  const maxRoles = Math.max(sig1.childRoles.length, sig2.childRoles.length);
  
  return maxRoles > 0 ? roleMatch / maxRoles : 0;
}

/**
 * Stage 4: 检测重复组件引用
 * 统计相同 component id 出现的次数
 */
function stage4DetectRepetition(skeleton) {
  const idCount = {};
  
  function collectIds(tree) {
    if (tree.id && !tree.id.startsWith('inline_')) {
      idCount[tree.id] = (idCount[tree.id] || 0) + 1;
    }
    if (tree.children) {
      for (const child of tree.children) {
        collectIds(child);
      }
    }
  }
  
  for (const mod of skeleton.modules) {
    collectIds(mod);
  }
  
  // 生成组件映射（只保留出现 >= MIN_REPEAT_COUNT 次的）
  const components = [];
  for (const [id, count] of Object.entries(idCount)) {
    if (count >= MIN_REPEAT_COUNT) {
      components.push({
        name: `Component_${id.substring(0, 12)}`,
        fromNodes: [id],
        count,
        similarity: 1.0,
        role: 'Unknown' // 可以后续通过规则推断
      });
    }
  }
  
  // 按 count 降序排列
  components.sort((a, b) => b.count - a.count);
  
  return { components };
}

// ==================== 主流程 ====================
async function runPipeline() {
  console.log('='.repeat(50));
  console.log('DSL 语义编译算法 v1.0');
  console.log('='.repeat(50));
  
  // ===== Stage 0: 加载数据 =====
  console.log('\n[Stage 0] 加载模块结构...');
  const modules = [];
  for (const mod of structure.modules) {
    const modStructure = loadModuleStructure(mod);
    modules.push(modStructure);
  }
  console.log(`加载了 ${modules.length} 个模块`);
  
  // ===== Stage 1: Shallow BFS =====
  console.log(`\n[Stage 1] Shallow BFS (maxDepth=${BFS_MAX_DEPTH})...`);
  const shallowModules = modules.map(m => stage1ShallowBFS(m));
  
  // Stage 1: 角色推断
  console.log('[Stage 1] 角色推断...');
  for (const mod of shallowModules) {
    stage1InferRoles(mod);
  }
  
  const skeleton = { modules: shallowModules };
  console.log('Stage 1 完成');
  
  // ===== Stage 2: Skeleton Freeze =====
  console.log('\n[Stage 2] Skeleton Freeze...');
  for (const mod of skeleton.modules) {
    stage2Freeze(mod);
  }
  console.log('结构已冻结');
  
  // ===== Stage 3: Targeted DFS =====
  console.log(`\n[Stage 3] Targeted DFS (maxDepth=${DFS_MAX_DEPTH})...`);
  console.log(`[Stage 3] confidence threshold=${CONFIDENCE_THRESHOLD}`);
  
  // 收集需要深度搜索的节点
  const deepSearchNodes = [];
  for (const mod of skeleton.modules) {
    collectDeepSearchNodes(mod, deepSearchNodes);
  }
  console.log(`找到 ${deepSearchNodes.length} 个需要深度搜索的节点`);
  
  if (OPENAI_API_KEY && deepSearchNodes.length > 0) {
    // 限制 AI 调用数量
    // const limitedNodes = deepSearchNodes.slice(0, 30);
    console.log(`AI 推断 ${deepSearchNodes.length} 个节点...`);
    
    const aiResults = await aiInferRoles(deepSearchNodes);
    console.log(`AI 推断完成: ${Object.keys(aiResults).length} 个节点`);
    
    // 应用 AI 结果
    for (const mod of skeleton.modules) {
      stage3ApplyAiResults(mod, aiResults);
    }
  } else {
    console.log('跳过 AI 增强（无 API Key）');
  }
  
  // ===== Stage 4: Repetition Detection =====
  console.log('\n[Stage 4] Repetition Detection...');
  const componentMap = stage4DetectRepetition(skeleton);
  console.log(`检测到 ${componentMap.components.length} 个可复用组件`);
  
  // ===== 输出结果 =====
  const outputPath = path.join(projectRoot, 'dsl/snapshots/semantic-skeleton.json');
  fs.writeFileSync(outputPath, JSON.stringify(skeleton, null, 2));
  
  const componentMapPath = path.join(projectRoot, 'dsl/snapshots/component-map.json');
  fs.writeFileSync(componentMapPath, JSON.stringify(componentMap, null, 2));
  
  // ===== 统计 =====
  function countRoles(tree, stats = {}, depth = 0) {
    if (depth <= 5) {
      stats[tree.role] = (stats[tree.role] || 0) + 1;
    }
    if (tree.children) {
      for (const child of tree.children) {
        countRoles(child, stats, depth + 1);
      }
    }
    return stats;
  }
  
  const allStats = {};
  for (const mod of skeleton.modules) {
    countRoles(mod, allStats);
  }
  
  console.log('\n' + '='.repeat(50));
  console.log('角色统计:', allStats);
  console.log('输出文件:');
  console.log('- dsl/snapshots/semantic-skeleton.json');
  console.log('- dsl/snapshots/component-map.json');
  console.log('='.repeat(50));
}

runPipeline().catch(console.error);
