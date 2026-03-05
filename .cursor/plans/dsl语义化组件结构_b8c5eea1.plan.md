---
name: DSL语义化组件结构
overview: 在 build-dsl.mjs 中增加语义推断模块，实现 5 阶段流程，生成 semantic-skeleton.json 和 component-map.json
todos:
  - id: add-semantic-func
    content: 在 build-dsl.mjs 中新增语义推断函数
    status: pending
  - id: build-skeleton
    content: 实现 buildSemanticSkeleton 递归构建
    status: pending
  - id: detect-components
    content: 实现 detectReusableComponents 组件抽象
    status: pending
  - id: output-skeleton
    content: 生成 semantic-skeleton.json 输出
    status: pending
  - id: output-map
    content: 生成 component-map.json 输出
    status: pending
isProject: false
---

## 核心改动

在 `scripts/dsl/build-dsl.mjs` 中增加语义推断模块。

## 实现步骤

### 1. 新增语义推断函数

在 `build-dsl.mjs` 中添加：

- `inferSemanticRole(node, depth)` - 根据节点特征推断 role
- `buildSemanticSkeleton(module, depth)` - 递归构建语义骨架（depth ≤ 2）
- `detectReusableComponents(modules)` - 检测重复模式 ≥ 3 次

### 2. 修改输出逻辑

在构建流程最后增加：

- 生成 `dsl/snapshots/semantic-skeleton.json` - 语义骨架
- 生成 `dsl/snapshots/component-map.json` - 可复用组件映射

### 3. 语义规则（按优先级）

```js
const ROLE_RULES = {
  // 位置规则
  "Header": node => node.name?.includes("header") || (node.y < 100 && depth === 0),
  "Footer": node => node.name?.includes("footer") || node.name?.includes("版权"),
  // 结构规则
  "List": node => node.flexDirection === "row" && node.children?.length > 3,
  "Card": node => node.borderRadius > 0 && node.children?.length >= 2,
  // 内容规则
  "Button": node => node.name?.includes("按钮") || node.name?.includes("button"),
  "Title": node => node.fontWeight >= 700 && node.fontSize >= 20,
  "Image": node => node.type === "IMAGE" || node.name?.includes("图"),
  "Icon": node => node.name?.includes("icon") || node.width <= 24,
};
```

### 4. 输出文件格式

**semantic-skeleton.json:**

```json
{
  "modules": [
    {
      "id": "header-1440-1",
      "role": "Header",
      "children": [
        { "id": "header-1440-6642af4d", "role": "Logo" },
        { "id": "728-400a6c3c", "role": "Nav" }
      ]
    }
  ]
}
```

**component-map.json:**

```json
{
  "components": [
    { "name": "ProductCard", "fromNodes": ["node_a", "node_b", "node_c"], "similarity": 0.85 }
  ]
}
```

## 关键约束

- 上层结构一旦生成不可修改（Stage 2 冻结）
- depth > 5 禁止
- 禁止 BlueBox、Group1 等视觉词作为 role

