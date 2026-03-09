我给你一份 **可以直接交给 AI 执行的工程级 Plan**。目标非常明确：

> **把 MasterGo DSL JSON → 自动生成可维护的 TSX 组件（只生成 JSX 结构部分）**

这份计划会包含：

* 架构设计
* 目录结构
* DSL Schema
* Generator 设计
* 任务拆解（AI可执行）
* 每一步的验收标准

你可以直接丢给你的 AI agent（例如你之前提到的 OpenClaw）去生成代码。

---

# 一、项目目标

构建一个 **DSL → TSX 代码生成器**。

输入：

```
MasterGo DSL JSON
```

输出：

```
React TSX 组件
```

示例：

输入 DSL

```json
{
  "type": "frame",
  "children": [
    {
      "type": "image",
      "src": "avatar"
    },
    {
      "type": "text",
      "content": "username"
    }
  ]
}
```

生成 TSX

```tsx
<View className="flex items-center gap-3">
  <Image src={avatar} />
  <Text>{username}</Text>
</View>
```

---

# 二、技术栈

语言：

```
TypeScript
Node.js
```

AST 工具：

* Babel
* Recast

文件处理：

* Prettier

---

# 三、项目目录结构

建议结构：

```
dsl-to-tsx/

src/
  parser/
    parseMastergoDSL.ts

  normalize/
    normalizeNode.ts

  ast/
    uiNode.ts
    buildAST.ts

  generator/
    jsxGenerator.ts
    propsGenerator.ts
    childrenGenerator.ts

  mapping/
    componentMap.ts
    styleMap.ts

  writer/
    writeTSXFile.ts

  utils/
    indent.ts

  index.ts

examples/
  banner.dsl.json

output/
  Banner.tsx
```

---

# 四、核心数据结构

### UI AST（核心）

```ts
export interface UINode {
  type: string
  props?: Record<string, any>
  children?: UINode[]
  condition?: string
  loop?: {
    source: string
    item: string
  }
}
```

示例 AST

```ts
{
  type: "View",
  props: {
    className: "flex items-center"
  },
  children: [
    {
      type: "Image",
      props: {
        src: "{getAvatarUrl(profile.user.avatar)}"
      }
    },
    {
      type: "Text",
      props: {
        children: "{profile.user.username}"
      }
    }
  ]
}
```

---

# 五、Component Mapping

DSL → React组件

```ts
export const componentMap = {
  frame: "View",
  text: "Text",
  image: "Image",
  video: "Video",
  group: "View"
}
```

转换：

```
dsl.type -> componentMap[type]
```

---

# 六、DSL 规范（建议）

你需要先做一个 **中间 DSL**

不要直接用 MasterGo DSL。

建议结构：

```json
{
  "type": "View",
  "props": {
    "className": "flex items-center gap-3"
  },
  "children": [
    {
      "type": "Image",
      "props": {
        "src": "{getAvatarUrl(profile.user.avatar)}",
        "className": "w-16 h-16 rounded-full"
      }
    },
    {
      "type": "Text",
      "props": {
        "children": "{profile.user.username}"
      }
    }
  ]
}
```

---

# 七、JSX Generator 设计

核心函数：

```ts
function generateJSX(node: UINode): string
```

逻辑：

```
node
 ├─ type
 ├─ props
 └─ children
```

输出：

```
<View>
   ...
</View>
```

---

### Generator 示例

```ts
export function generateJSX(node: UINode): string {
  const props = generateProps(node.props)

  if (!node.children?.length) {
    return `<${node.type} ${props} />`
  }

  const children = node.children
    .map(generateJSX)
    .join("\n")

  return `
<${node.type} ${props}>
${children}
</${node.type}>
`
}
```

---

# 八、Props Generator

```ts
export function generateProps(props = {}) {
  return Object.entries(props)
    .map(([key, value]) => {
      if (value.startsWith("{")) {
        return `${key}=${value}`
      }

      return `${key}="${value}"`
    })
    .join(" ")
}
```

---

# 九、条件渲染

DSL

```json
{
  "type": "View",
  "condition": "open"
}
```

生成

```tsx
{open && <View />}
```

实现：

```ts
if (node.condition) {
  return `{${node.condition} && (${jsx})}`
}
```

---

# 十、循环渲染

DSL

```json
{
  "loop": {
    "source": "stats",
    "item": "item"
  }
}
```

生成

```tsx
{stats.map((item) => (
  <View />
))}
```

---

# 十一、Fragment

DSL

```json
{
  "type": "Fragment"
}
```

生成

```tsx
<>
...
</>
```

---

# 十二、TSX 文件生成

最终输出文件：

```
Banner.tsx
```

模板：

```tsx
import { View, Text, Image } from "@tarojs/components"

export const Banner = () => {
  return (
${generatedJSX}
  )
}
```

---

# 十三、AI 可执行任务拆解

下面是 **可以直接丢给 AI agent 的任务**。

---

## Task 1

创建项目结构

要求：

```
pnpm init
typescript
eslint
prettier
```

创建目录：

```
src/
parser
normalize
ast
generator
mapping
writer
utils
```

验收：

```
pnpm build
成功
```

---

# Task 2

实现 **UI AST 类型**

文件：

```
ast/uiNode.ts
```

内容：

```
interface UINode
```

支持：

```
type
props
children
condition
loop
```

---

# Task 3

实现 **componentMap**

文件：

```
mapping/componentMap.ts
```

支持：

```
frame
text
image
video
group
```

---

# Task 4

实现 **DSL → UI AST**

文件：

```
ast/buildAST.ts
```

功能：

```
parseMastergoDSL(dsl)
→ UINode
```

---

# Task 5

实现 **JSX Generator**

文件：

```
generator/jsxGenerator.ts
```

函数：

```
generateJSX(node)
```

支持：

```
props
children
self closing
```

---

# Task 6

实现 **条件渲染**

支持：

```
condition
```

生成：

```
{cond && <Component />}
```

---

# Task 7

实现 **循环渲染**

支持：

```
loop
```

生成：

```
map()
```

---

# Task 8

实现 **TSX File Writer**

文件：

```
writer/writeTSXFile.ts
```

输出：

```
output/Banner.tsx
```

---

# Task 9

Prettier 格式化

使用：

* Prettier

保证生成代码可读。

---

# Task 10

示例运行

输入：

```
examples/banner.dsl.json
```

运行：

```
pnpm generate
```

输出：

```
output/Banner.tsx
```

---

# 十四、最终目标

运行：

```
pnpm generate banner.dsl.json
```

输出：

```
Banner.tsx
```

自动生成 JSX：

```
<View>
  <Image />
  <Text />
</View>
```

---

# 十五、下一阶段（你未来一定会做）

如果这个跑通，下一步就是 **工业级能力**：

1️⃣ 自动组件拆分

```
Banner
Avatar
ProfileStats
FollowButton
```

2️⃣ 自动 Tailwind

```
style → className
```

3️⃣ 自动 props

```
{profile.user.username}
```

4️⃣ 自动 import

```
Image
Text
View
```

---

如果你愿意，我可以再给你一份 **更高级的 Plan**：

**《DSL → TSX 自动组件拆分架构》**

那套东西其实就是：

> **做一个 mini Builder.io / Plasmic**

但 **非常适合你现在的 MasterGo MCP 项目**。
