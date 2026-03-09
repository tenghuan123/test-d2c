---
name: dsl-semantic-inference
description: 语义化 DSL 组件结构。先规则快速推断(d≤2)，再 AI 增强推断复杂节点，输出 semantic-skeleton.json + component-map.json。
---

# DSL 语义化推断

## 目标
将 `dsl/snapshots/structure.latest.json` 转换为语义化骨架，解决组件没有语义 role 的问题。

## 执行流程

### Step 1: 读取输入
读取 `dsl/snapshots/structure.latest.json`

### Step 2: 规则快速推断 (Stage 1)

对每个 module 执行规则推断（depth ≤ 2）：

```js
const QUICK_RULES = [
  { pattern: /header|导航|nav/i, role: "Header" },
  { pattern: /footer|底部|版权|copyright/i, role: "Footer" },
  { pattern: /列表|list/i, role: "List" },
  { pattern: /卡片|card/i, role: "Card" },
  { pattern: /按钮|button|提交/i, role: "Button" },
  { pattern: /标题|title|标题/i, role: "Title" },
  { pattern: /图|image|img|图片/i, role: "Image" },
  { pattern: /icon|图标/i, role: "Icon" },
  { pattern: /标签|tag/i, role: "Badge" },
  { pattern: /搜索|search/i, role: "SearchBar" },
  { pattern: /输入|input|表单/i, role: "Input" },
  { pattern: /描述|description|正文/i, role: "Description" },
];

// 位置推断
y < 100 && depth === 0 → "Header"
y > 1000 && depth === 0 → "Footer"

// 结构推断
children.length > 3 && flexDirection === "row" → "List"
borderRadius > 0 && children.length >= 2 → "Card"
```

### Step 3: AI 增强推断 (Stage 2)

对规则无法判定的节点，调用 OpenAI：

```
分析 DSL 结构，推断语义角色。

AllowedRoles: [Header, Footer, Section, List, Card, Button, Title, Description, Image, Icon, Badge, Nav, SearchBar, ActionButton, Input, Logo, Text]

规则：
1. 禁止视觉词：BlueBox、Group1、TopArea、Container1
2. depth ≤ 5
3. 结构冻结后不可修改父节点

输入：{未推断的节点结构}

输出 JSON（纯数组，不要 markdown）：
[
  { "id": "node_id", "role": "Card", "confidence": 0.9 },
  ...
]
```

调用方式：
```js
const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
  method: "POST",
  headers: {
    "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    model: "gpt-4o-mini",
    messages: [{ role: "user", content: prompt }],
    temperature: 0.3,
    response_format: { type: "json_object" }
  })
});
```

### Step 4: 组件抽象检测

检测重复结构 ≥ 3 次，生成 component-map：

```js
function detectReusableComponents(modules) {
  // 提取所有叶子节点的结构签名
  // 比较相似度 ≥ 0.8 且出现 ≥ 3 次 → 抽象组件
}
```

### Step 5: 输出文件

生成两个文件：

**dsl/snapshots/semantic-skeleton.json:**
```json
{
  "modules": [
    {
      "id": "header-1440-1",
      "role": "Header",
      "confidence": 0.95,
      "children": [
        { "id": "header-1440-6642af4d", "role": "Logo", "confidence": 0.9 },
        { "id": "728-400a6c3c", "role": "Nav", "confidence": 0.85 }
      ]
    }
  ]
}
```

**dsl/snapshots/component-map.json:**
```json
{
  "components": [
    { "name": "ProductCard", "fromNodes": ["node_a", "node_b", "node_c"], "similarity": 0.85 }
  ]
}
```

## 约束
- depth > 5 禁止
- 禁止视觉词作为 role
- 先宏观(2层)后微观(5层)
- 上层结构冻结后不可修改

## 环境变量
- `OPENAI_API_KEY` - OpenAI API Key（可选，无 key 则只执行规则推断）
