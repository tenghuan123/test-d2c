很好，你现在其实已经有了一个 **非常接近正确路线的系统**：

* 有 **DSL**
* 有 **节点递归能力**
* 有 **分层解析能力**
* 有 **AI Agent**

缺的是一套 **标准化的 AI 执行 pipeline**。
我给你设计一套 **可以直接交给 AI 执行的完整方案**。

目标：

> **让 AI 从 MasterGo DSL 自动推导出语义化、可维护的前端结构**

---

# 一、整体架构

整个系统拆成 **6 个阶段**。

```
MasterGo DSL
      │
      ▼
① Tree Explorer
(控制递归解析)

      │
      ▼
② Layout Analyzer
(推导布局)

      │
      ▼
③ Semantic Analyzer
(识别组件)

      │
      ▼
④ DOM Optimizer
(压缩节点)

      │
      ▼
⑤ Component Builder
(生成组件结构)

      │
      ▼
⑥ Code Generator
(生成React/Vue代码)
```

你的系统现在大概在：

```
Tree Explorer → DOM
```

缺中间 3 层。

---

# 二、AI Agent 执行流程

AI 的执行流程应该是 **分阶段任务**，而不是一次生成代码。

AI workflow：

```
step1
获取 DSL 树

step2
浅层递归
识别页面区块

step3
深层递归
识别布局结构

step4
语义推导

step5
组件拆分

step6
生成代码
```

---

# 三、阶段一：Tree Explorer（你已经实现）

目标：

**控制 DSL 递归深度**

策略：

```
level 1
页面区块

level 2
布局结构

level 3
组件

level 4+
UI细节
```

AI 执行规则：

```
先 BFS
再 DFS
```

算法：

### 第一阶段 BFS

用于识别：

```
Header
Sidebar
Content
Footer
```

示例：

```
Page
 ├ Header
 ├ Hero
 ├ Content
 └ Footer
```

---

### 第二阶段 DFS

在选中的节点深挖：

例如：

```
Header
  ├ Logo
  ├ Menu
  └ Avatar
```

---

# 四、阶段二：Layout Analyzer（关键模块）

AI 必须判断布局类型。

规则：

## 1 AutoLayout

识别：

```
子元素 X 坐标相同
Y 递增
```

推导：

```
flex-direction: column
```

---

识别：

```
子元素 Y 坐标相同
X 递增
```

推导：

```
flex-direction: row
```

---

识别：

```
元素等距排列
```

推导：

```
gap
```

---

识别：

```
二维排列
```

推导：

```
grid
```

---

识别：

```
完全自由摆放
```

推导：

```
absolute
```

---

AI 输出结构：

```
layoutTree = {
  type: "flex",
  direction: "row",
  gap: 16,
  children: [...]
}
```

---

# 五、阶段三：Semantic Analyzer

AI 必须识别 UI 语义。

示例规则：

### Header

识别模式：

```
logo + menu + avatar
```

推导：

```
Header
```

---

### Card

识别：

```
image
title
description
button
```

推导：

```
Card
```

---

### List

识别：

```
重复节点
```

推导：

```
List + Item
```

---

AI 输出：

```
componentTree = {
  type: "Header",
  children: [
    "Logo",
    "NavMenu",
    "UserAvatar"
  ]
}
```

---

# 六、阶段四：DOM Optimizer

设计稿节点很多是无意义的。

例如：

```
Group
 Frame
  Rectangle
```

可以优化成：

```
div
```

AI 规则：

删除节点类型：

```
Group
Frame
Wrapper
```

如果：

```
没有样式
没有布局
只有一个子节点
```

就删除。

---

目标：

```
500 DSL nodes
↓
80 DOM nodes
```

---

# 七、阶段五：Component Builder

将语义树转组件。

示例：

```
Page
 ├ Header
 ├ Hero
 ├ ProductList
 └ Footer
```

生成：

```
components/
  Header.tsx
  Hero.tsx
  ProductList.tsx
  Footer.tsx
```

---

组件结构：

```
Header
 ├ Logo
 ├ Menu
 └ Avatar
```

生成：

```
Header.tsx
Logo.tsx
Menu.tsx
Avatar.tsx
```

---

# 八、阶段六：Code Generator

最终生成代码：

示例：

```tsx
export function Header() {
  return (
    <header className="flex items-center justify-between">
      <Logo />
      <Menu />
      <Avatar />
    </header>
  )
}
```

而不是：

```
div div div div div
```

---

# 九、AI Agent Prompt（核心）

给 AI 的系统 prompt：

```
You are an AI Design-to-Code agent.

Your task is to convert MasterGo DSL into maintainable frontend code.

You must follow these steps:

1 Analyze the DSL tree using BFS to identify major page sections.

2 Use DFS to explore important branches to understand layout details.

3 Infer layout type:
   - flex row
   - flex column
   - grid
   - absolute

4 Detect semantic UI structures:
   - header
   - hero
   - card
   - list
   - footer

5 Remove unnecessary wrapper nodes.

6 Build reusable components.

7 Generate clean React code using semantic HTML.

Rules:
- Avoid excessive div nesting
- Avoid absolute positioning unless necessary
- Prefer flex and grid layouts
- Ensure the structure is maintainable
```

---

# 十、AI Agent 技能拆分

建议拆成 skills：

```
skills/
  dsl-parser.md
  tree-explorer.md
  layout-analyzer.md
  semantic-analyzer.md
  dom-optimizer.md
  component-builder.md
  code-generator.md
```

每个 skill 负责一层。

---

# 十一、你的系统会变成这样

现在：

```
DSL → DOM
```

升级后：

```
DSL
 ↓
Tree Explorer
 ↓
Layout Analyzer
 ↓
Semantic Analyzer
 ↓
DOM Optimizer
 ↓
Component Builder
 ↓
Code Generator
```

这就是：

**真正的 Design-to-Code 系统。**

---

# 十二、我建议你再加一个“AI杀手级能力”

你的 DSL 其实可以做一个：

**布局推理评分系统**

AI 会给出：

```
confidence: 0.87
layout: flex-row
```

如果低于：

```
0.6
```

就：

```
继续递归
```

这会让你的系统非常稳定。

---

如果你愿意，我可以 **再帮你做一件非常重要的事**：

我可以给你设计一套：

**完整 DSL Schema + AI 推导协议**

这是目前 **Figma AI / v0 / Locofy / Anima** 这一类工具的核心技术。
