---
name: DSL语义化AI推断
overview: 新建 OpenAI 调用的 skill，用于语义推断 component role
todos:
  - id: new-skill
    content: 新建 dsl-semantic-inference skill
    status: pending
  - id: api-call
    content: 实现 OpenAI API 调用逻辑
    status: pending
  - id: prompt
    content: 设计语义推断 prompt
    status: pending
  - id: output
    content: 处理输出并生成 semantic-skeleton.json
    status: pending
isProject: false
---

## 方案

新建 `.cursor/skills/dsl-semantic-inference/SKILL.md`，调用 OpenAI API 推断语义角色。

## 核心改动

### 1. 新建 Skill

`.cursor/skills/dsl-semantic-inference/SKILL.md`

功能：

- 输入：DSL 节点结构（nodeType、name、style、children）
- 调用 OpenAI API（需用户配置 `OPENAI_API_KEY`）
- 输出：带 role 的语义骨架

### 2. Prompt 设计

```
分析以下 DSL 节点，推断语义角色：
- 顶层节点：Header/Section/Footer/Content
- 列表项：List/Card/Item
- 原子节点：Title/Description/Button/Icon/Image/Badge

规则：
1. 只用语义词，禁止 BlueBox/Group1/TopArea
2. 参考 AllowedRoles: [Header, Footer, Section, List, Card, Button, Title, Description, Image, Icon, Badge, Nav, SearchBar, ActionButton]
3. 递归深度 ≤ 5
4. 结构冻结后不可修改

输入：{nodes}
输出：{semanticTree}
```

### 3. API 调用

```js
const response = await fetch("https://api.openai.com/v1/chat/completions", {
  method: "POST",
  headers: {
    "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    model: "gpt-4o-mini",
    messages: [{ role: "user", content: prompt }],
    temperature: 0.3
  })
});
```

### 4. 输出格式

```json
{
  "role": "Header",
  "confidence": 0.9,
  "children": [
    { "id": "node_1", "role": "Logo", "confidence": 0.95 },
    { "id": "node_2", "role": "Nav", "confidence": 0.85 }
  ]
}
```

## 环境变量

用户需配置：

- `OPENAI_API_KEY` - OpenAI API Key

## 使用方式

```
@skill dsl-semantic-inference
分析 dsl/snapshots/structure.latest.json
```

## 约束

- depth > 5 禁止
- 禁止视觉词作为 role
- 先宏观(2层)后微观(5层)

