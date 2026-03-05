很好 👍
下面这份文档是**可以直接交给你的 AI Agent 执行和优化的工程规范文档**。

目标：

> 🎯 将 MasterGo DSL 树结构
> 通过「受控树搜索算法」转换为稳定的语义组件结构

这是一份 **算法级规范**，不是概念讨论。

---

# 📘 文档：Design DSL 语义编译算法规范 v1.0

---

# 1️⃣ 目标定义

将原始 DSL 树：

```
Raw DSL Tree
```

转换为：

```
Semantic AST
    ↓
Component AST
    ↓
Production Code
```

要求：

* 结构稳定
* 可维护
* 可复用
* 跨页面一致
* 不依赖随机 AI 推断

---

# 2️⃣ 核心思想

本系统采用：

> 🌳 分阶段受控树搜索（Controlled Tree Search）

结合：

* Breadth-First Search（BFS）
* Depth-First Search（DFS）
* Iterative Deepening
* AI 作为启发式函数（Heuristic）

AI 不是结构控制者。

AI 仅作为：

> 节点评分器 + 语义判断器

---

# 3️⃣ 整体算法流程

```
Stage 0  DSL Normalization
Stage 1  Shallow BFS（宏观结构扫描）
Stage 2  Skeleton Freeze（结构冻结）
Stage 3  Targeted DFS（局部深度搜索）
Stage 4  Repetition Detection（组件抽象）
Stage 5  Code Generation
```

---

# 4️⃣ Stage 0：DSL Normalization

## 输入：

* MasterGo Raw DSL

## 输出：

```ts
interface NormalizedNode {
  id: string
  type: "container" | "text" | "image" | "icon"
  layout: LayoutInfo
  style: StyleInfo
  children: NormalizedNode[]
}
```

## 规则：

1. 修正非法布局（如负 gap）
2. 去除无意义 wrapper
3. 保留节点 ID 映射
4. 禁止语义推断

---

# 5️⃣ Stage 1：Shallow BFS（宏观结构扫描）

## 算法

```
BFS(tree, maxDepth = 2)
```

只允许展开到深度 2。

## 目标

识别：

* 页面类型
* 主区块结构
* 一级 Section

## AI 任务

AI 仅负责：

```
classifyPageType(nodes)
assignSectionRole(node)
```

允许角色集合：

```
Header
Section
List
Content
Sidebar
Footer
Hero
FilterBar
Form
```

禁止：

* 修改层级
* 重排顺序
* 创建新节点

---

# 6️⃣ Stage 2：Skeleton Freeze（结构冻结）

生成：

```ts
interface SemanticNode {
  id: string
  role: AllowedRole
  children: SemanticNode[]
}
```

规则：

* 冻结层级
* 冻结顺序
* 冻结角色

后续阶段不得修改。

---

# 7️⃣ Stage 3：Targeted DFS（局部深度搜索）

## 算法

```
DFS(node, maxDepth = 5)
```

只对：

* 被判定为 Content / List / Section 的节点执行

## 目标

识别：

* 内部结构模式
* 重复子树
* 可抽象组件

AI 仅负责：

```
inferComponentRole(subtree)
scoreReusability(subtree)
```

禁止：

* 修改 Skeleton
* 回溯父级结构

---

# 8️⃣ Stage 4：Repetition Detection（组件抽象）

## 规则

若满足：

```
结构相似度 > 85%
重复次数 ≥ 3
```

则生成组件：

```ts
interface ComponentDefinition {
  name: string
  sourceNodeIds: string[]
  structure: SemanticNode
}
```

命名规则：

* 仅允许语义命名
* 禁止视觉命名（如 BlueBox）

---

# 9️⃣ Stage 5：Code Generation

输入：

```
Semantic AST
Component Definitions
Normalized DSL
```

输出：

* 按组件拆分目录
* 每个 Section 独立文件
* 每个抽象组件独立文件

禁止：

* 单文件 1000 行
* 生成 div 垃圾树

---

# 🔟 搜索策略说明

本系统采用：

## 阶段一：BFS（宏观）

* 目的：结构理解
* 深度：2
* 保留全部节点

---

## 阶段二：DFS（局部）

* 目的：细节抽象
* 深度：5
* 只对候选节点执行

---

## 可选优化：Beam Search

在 Stage 1 中：

```
仅保留 Top-K 页面结构候选
```

K 默认 = 2

---

# 1️⃣1️⃣ AI 的角色定义

AI 只能做：

* 分类
* 评分
* 模式识别
* 相似度判断

AI 不允许：

* 修改冻结结构
* 创造新层级
* 重排节点

---

# 1️⃣2️⃣ 设计原则

1. 宏观先行，微观后置
2. 结构冻结，避免震荡
3. 局部递归，避免 token 爆炸
4. 规则主导，AI 辅助
5. 组件抽象必须基于重复

---

# 1️⃣3️⃣ 性能与稳定性目标

| 指标       | 目标    |
| -------- | ----- |
| 页面结构稳定率  | ≥ 90% |
| 组件抽象准确率  | ≥ 80% |
| 命名一致性    | ≥ 95% |
| 跨页面结构一致性 | ≥ 85% |

---

# 1️⃣4️⃣ 最终产物结构

```
/semantic
  skeleton.json
  components.json

/generated
  /components
  /sections
  page.tsx
```

---

# 🎯 结论

该系统本质是：

> 设计 DSL → 语义 AST 的受控搜索编译系统

采用：

* BFS 宏观扫描
* DFS 局部深化
* AI 作为启发式函数
* 阶段冻结保证稳定

这保证：

* 可维护
* 可扩展
* 可规模化
* 可跨页面复用

---

如果你愿意，下一步我可以帮你做：

* v2：加入「语义评分系统」
* v2：加入「结构置信度机制」
* 或帮你写成可以直接放进项目的 README 版本

你现在已经不是在做页面生成。

你在做：

> 🎯 Design Compiler Engine v1.
