很好 👍
既然你要把它交给 AI 自动生成，那这个 DSL 目录规范必须满足：

- ✅ 可分块生成
- ✅ 支持按需加载
- ✅ 支持增量更新
- ✅ 支持组件注册
- ✅ 支持版本化
- ✅ 支持 diff
- ✅ 支持未来扩展

我们直接设计一个 **可工程化落地的 DSL v1 目录规范**。

------

# 🧠 整体设计目标

把一个巨大的 MasterGo DSL 转换成：

```
设计编译产物
```

而不是一个 JSON 文件。

------

# 🏗 DSL 目录结构规范 v1

```bash
/dsl
│
├── index.json                 # DSL 入口文件（必须存在）
│
├── meta/
│   ├── project.json           # 项目元信息
│   └── version.json           # DSL 版本 & hash
│
├── registry/                  # 定义层（Definition Layer）
│   ├── components.json        # 组件注册表
│   ├── icons.json             # 图标注册表
│   ├── tokens.json            # 设计 Token
│   ├── textStyles.json        # 文本样式
│   └── layouts.json           # 可复用布局模式
│
├── definitions/               # 组件定义
│   └── component/
│       ├── Button.json
│       ├── Card.json
│       ├── Input.json
│       └── ...
│
├── instances/                 # 实例层（页面 & 模块）
│   ├── pages/
│   │   ├── home.json
│   │   ├── login.json
│   │   └── ...
│   │
│   └── modules/
│       ├── hero-section.json
│       ├── footer.json
│       └── ...
│
├── assets/
│   ├── images.json
│   └── svgs/
│
└── graph/
    └── dependency.json        # 依赖图
```

------

# 🔥 1️⃣ index.json（入口文件）

这是整个 DSL 的唯一入口。

```json
{
  "dslVersion": "1.0.0",
  "project": "./meta/project.json",
  "registry": "./registry",
  "definitions": "./definitions/component",
  "pages": "./instances/pages",
  "modules": "./instances/modules",
  "dependencyGraph": "./graph/dependency.json"
}
```

AI 只需要 index.json，就能按需加载。

------

# 📦 2️⃣ meta 层

## project.json

```json
{
  "name": "DesignSystemProject",
  "source": "mastergo",
  "generatedAt": "2026-03-04",
  "tokenHash": "abc123",
  "componentHash": "def456"
}
```

用于增量编译。

------

# 📚 3️⃣ registry 层（全局注册表）

这是最重要的层。

------

## components.json

```json
{
  "Button": {
    "file": "../definitions/component/Button.json",
    "usageCount": 42
  },
  "Card": {
    "file": "../definitions/component/Card.json",
    "usageCount": 18
  }
}
```

用途：

- 统计组件使用
- AI 只读取被引用组件

------

## tokens.json

```json
{
  "color": {
    "primary-500": "#1677ff",
    "gray-100": "#f5f5f5"
  },
  "fontSize": {
    "sm": 12,
    "md": 14,
    "lg": 16
  },
  "radius": {
    "sm": 4,
    "md": 8
  }
}
```

------

## textStyles.json

```json
{
  "heading-1": {
    "fontSize": "lg",
    "fontWeight": 600
  },
  "body": {
    "fontSize": "md",
    "fontWeight": 400
  }
}
```

------

# 🧱 4️⃣ definitions 层（组件定义）

每个组件一个文件。

------

## Button.json

```json
{
  "name": "Button",
  "propsSchema": {
    "variant": ["primary", "secondary"],
    "size": ["sm", "md", "lg"],
    "text": "string",
    "icon": "optional"
  },
  "structure": {
    "type": "stack",
    "layout": {
      "mode": "row",
      "align": "center",
      "justify": "center"
    },
    "children": [
      { "type": "icon", "slot": "leftIcon" },
      { "type": "text", "slot": "label" }
    ]
  }
}
```

注意：

组件定义不包含具体文案。

------

# 🧩 5️⃣ instances 层（页面实例）

------

## home.json

```json
{
  "id": "home",
  "type": "page",
  "children": [
    {
      "type": "component",
      "ref": "HeroSection"
    },
    {
      "type": "component",
      "ref": "Card",
      "props": {
        "title": "推荐内容",
        "variant": "primary"
      }
    }
  ]
}
```

页面里永远不要写视觉细节。

只写：

```
type
ref
props
```

------

# 🧠 6️⃣ modules（模块复用）

hero-section.json：

```json
{
  "id": "hero-section",
  "type": "module",
  "children": [
    {
      "type": "component",
      "ref": "Button",
      "props": {
        "text": "立即开始",
        "variant": "primary"
      }
    }
  ]
}
```

------

# 🕸 7️⃣ dependency.json

用于增量编译。

```json
{
  "home": {
    "uses": ["HeroSection", "Card", "Button"]
  }
}
```

当 Button 改变，只重新生成依赖页面。

------

# 🧠 8️⃣ 生成流程推荐

```
Raw DSL
   ↓
Clean DSL
   ↓
Component Extraction
   ↓
Registry Builder
   ↓
Definition Builder
   ↓
Instance Builder
   ↓
Index Builder
```

------

# 🚀 9️⃣ AI 使用方式

当 AI 生成代码：

1️⃣ 读取 index.json
2️⃣ 读取 page.json
3️⃣ 发现 Button
4️⃣ 再读取 Button.json
5️⃣ 读取 tokens.json

而不是一次性读所有内容。

------

# 🔥 10️⃣ 未来可扩展

可以加：

```
/compiler
/runtime
/tests
/snapshots
```

支持：

- Playwright diff
- 增量生成
- 版本比对

------

# 🎯 总结

这套 DSL 结构的核心思想是：

> 定义层 / 实例层 分离
> 全局注册表
> 入口索引
> 依赖图

你现在做的不是 JSON 拆分。

你是在做：

> Design Compiler File System

------

如果你愿意，下一步我可以帮你设计：

- Semantic DSL v2（专门给 AI 读的极简结构）
- 或者 DSL → React 编译规范
- 或者“增量生成策略”

你现在已经是架构级思考了。