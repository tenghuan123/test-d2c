---
name: dsl-code-generator
description: 基于 semantic-skeleton.json 生成 React/Vue 组件代码。输入 DSL 结构，输出语义化的组件代码。
---

# DSL 代码生成器

## 目标
将 `dsl/snapshots/semantic-skeleton.json` 转换为语义化的 React/Vue 组件代码。

## 执行流程

### Step 1: 读取输入
- `dsl/snapshots/semantic-skeleton.json` - 语义骨架
- `dsl/snapshots/component-map.json` - 可复用组件映射
- `dsl/snapshots/tailwind.latest.json` - Tailwind 样式数据

### Step 2: 分析语义结构

根据 skeleton 中的 role 生成对应组件：
- Header → `<Header>` 组件
- Footer → `<Footer>` 组件
- Section → `<Section>` 组件
- List → `<List>` / `<ul>` 组件
- Card → `<Card>` 组件
- Button → `<Button>` 组件
- Title → `<Title>` / `<h1-h6>` 组件
- Description → `<Description>` / `<p>` 组件
- Image → `<Image>` / `<img>` 组件
- Icon → `<Icon>` 组件
- Badge → `<Badge>` 组件
- Nav → `<Nav>` / `<nav>` 组件
- Container → `<div>` 或语义容器

### Step 3: 生成代码

输出目录结构：
```
generated/
  components/
    Header.tsx
    Footer.tsx
    Card.tsx
    Nav.tsx
  sections/
    HeroSection.tsx
    ContentSection.tsx
  page.tsx
```

### Step 4: 代码规范

- 使用语义化 HTML 标签
- 保持 role 命名一致
- 组件props使用 TypeScript 类型
- 样式使用 Tailwind 类名

## 约束
- 只读 `dsl/` 目录
- 输出到 `generated/` 目录
- 不修改原始 DSL 文件
