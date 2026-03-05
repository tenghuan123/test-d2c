很好 👍
我们不空谈理念了，直接给你一套**可以让 AI Agent 执行的工程级计划**。

目标非常明确：

> 🎯 把 UI 图 + MasterGo DSL
> 编译成 **可维护、可复用、可扩展的语义化组件结构**

而不是生成一堆 div。

---

# 一、总体架构（给 Agent 的总目标）

AI Agent 要实现一个 5 阶段语义编译流程：

```
Stage 0  输入准备
Stage 1  宏观结构推理（2层递归）
Stage 2  结构冻结（生成语义骨架）
Stage 3  深层细节分析（5层递归）
Stage 4  组件抽象与复用检测
Stage 5  最终代码生成
```

核心原则：

> 上层结构一旦生成，必须冻结
> 下层只能填充，不允许推翻

---

# 二、AI Agent 执行总计划

下面是可以直接交给 Agent 的执行说明。

---

# 🔥 Stage 0：输入标准化

## Agent 任务

1. 接收：

   * UI 截图
   * MasterGo DSL（raw）
2. 输出：

   * normalized-dsl.json

## 要求

* 修正非法布局（负 gap → 转 margin/position）
* 去除无意义 wrapper
* 保留 nodeId 映射关系
* 输出统一结构：

```ts
interface NormalizedNode {
  id: string
  type: "container" | "text" | "image" | "icon"
  layout: {...}
  style: {...}
  children: NormalizedNode[]
}
```

⚠️ 这一阶段禁止做语义推断。

---

# 🔥 Stage 1：宏观结构推理（2层递归）

## Agent 任务

只读取：

```
Page
  children (第一层)
  grandchildren (第二层)
```

## 输出：

```json
{
  "pageType": "ListPage | DetailPage | FormPage | Dashboard",
  "sections": [
    { "id": "node_1", "role": "Header" },
    { "id": "node_2", "role": "FilterBar" },
    { "id": "node_3", "role": "Content" },
    { "id": "node_4", "role": "Footer" }
  ]
}
```

## 规则

* 不允许进入第三层
* 不允许重排节点
* 只允许赋予“语义角色”

---

# 🔒 Stage 2：结构冻结

生成：

```
semantic-skeleton.json
```

格式：

```ts
interface SemanticNode {
  id: string
  role: "Header" | "Section" | "List" | "Footer"
  children: SemanticNode[]
}
```

⚠️ 冻结规则：

* 不允许后续阶段修改：

  * role
  * 层级
  * 顺序

只能填充子节点。

---

# 🔥 Stage 3：深层细节分析（5层递归）

现在才允许 Agent 进入深层。

## 对每个 Section 单独执行：

```
Refine(sectionId)
```

输出：

```json
{
  "id": "node_3",
  "refinedStructure": {
    "role": "List",
    "itemStructure": {
      "role": "Card",
      "children": [
        { "role": "Image" },
        { "role": "Title" },
        { "role": "Price" },
        { "role": "ActionButton" }
      ]
    }
  }
}
```

规则：

* 不能改 Stage 2 结构
* 只能填充子结构
* 发现重复模式必须抽象

---

# 🔥 Stage 4：组件抽象检测

AI Agent 执行：

## 规则 1：重复结构 ≥ 3 次 → 抽象组件

生成：

```json
{
  "componentName": "ProductCard",
  "fromNodes": ["node_a", "node_b", "node_c"]
}
```

## 规则 2：icon + text → InlineGroup

## 规则 3：大号 bold 文本 → Title

## 规则 4：横向按钮组 → ButtonGroup

---

输出：

```
component-map.json
```

---

# 🔥 Stage 5：代码生成

现在才允许：

```
SemanticTree + ComponentMap + NormalizedDSL
    ↓
React / Vue 组件代码
```

生成要求：

* 目录按组件拆分
* 不允许生成 1000 行单文件
* 每个 Section 单独组件
* 每个抽象组件单独文件

---

# 三、Agent 行为约束（必须写入规则）

这是最关键的。

你必须告诉 Agent：

---

## 行为规则 1：阶段不可回溯

```
Once Stage 2 is completed,
Stage 3 cannot modify parent structure.
```

---

## 行为规则 2：命名统一规范

组件命名必须来自：

```
AllowedRoles = [
  Header,
  Footer,
  Section,
  List,
  Card,
  Button,
  Title,
  Description,
  Image,
  Icon,
  Badge
]
```

禁止自由发挥。

---

## 行为规则 3：不允许视觉词作为语义

禁止：

* BlueBox
* BigText
* TopArea
* Group1

必须语义化。

---

# 四、递归策略规范

你说的 2 层 / 5 层递归，我帮你固化：

---

## 宏观阶段

```
maxDepth = 2
goal = Identify Page Layout
```

---

## 微观阶段

```
maxDepth = 5
goal = Identify Reusable Pattern
```

---

## 禁止

```
depth > 5
```

避免 token 爆炸。

---

# 五、Agent Prompt 模板结构

你可以给 Agent 这样的固定流程：

---

## Prompt 1：宏观分析

> 分析以下 DSL 的前两层结构。
> 不允许进入第三层。
> 输出页面结构骨架。

---

## Prompt 2：细节填充

> 基于已冻结的结构，只填充 node_3。
> 不允许修改上层结构。
> 输出可复用组件结构。

---

## Prompt 3：组件抽象

> 检测重复结构。
> 如果重复次数 ≥ 3，抽象为组件。

---

# 六、你最终会得到什么？

如果按这个计划走，你会得到：

```
Design DSL
  ↓
Semantic AST
  ↓
Component AST
  ↓
Production Code
```

这已经是：

> 🎯 设计编译系统 v1

而不是“AI生成页面”。

---

# 七、现实预期

第一版效果：

* 70% 页面结构正确
* 50% 组件抽象正确
* 命名还会不稳定

第二版（加入规则库后）：

* 90% 页面结构稳定
* 组件抽象稳定
* 可维护

---

# 八、我建议的下一步

如果你愿意，我可以帮你：

1. 写完整的 Agent 执行规范文档（可以直接放到项目里）
2. 设计 semantic-skeleton.json 的完整 schema
3. 设计 component 抽象规则 DSL
4. 或帮你画完整系统架构图

你现在已经从“页面生成”升级到“设计编译器工程”。

这一步走对，你会非常强。
