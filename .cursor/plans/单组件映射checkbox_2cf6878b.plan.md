---
name: 单组件映射Checkbox
overview: 在不影响全局 Input 渲染的前提下，新增一份 JSON 映射配置，让指定组件在 codegen 阶段生成并渲染为 shadcn Checkbox。
todos:
  - id: add-render-map-json
    content: 新增 component-render-map.json，定义单组件到 Checkbox 的映射规则
    status: pending
  - id: wire-map-in-codegen
    content: 在 codegen.mjs 读取映射配置并构建 nodeId->renderAs 映射
    status: pending
  - id: apply-render-override
    content: 在 renderNode 中按 nodeId 覆盖渲染组件，未命中保持原 role
    status: pending
  - id: emit-checkbox-template
    content: 在 emitComponent 增加 Checkbox 专用生成模板与 import 逻辑
    status: pending
  - id: verify-codegen-typecheck
    content: 执行 codegen 与 typecheck，确认仅目标组件切换为 Checkbox
    status: pending
isProject: false
---

# 单组件 Checkbox 映射方案

## 目标

把 `component-map.json` 中指定项（如 `Component_16711_Input`）定向映射为 `Checkbox`，执行 `dsl:codegen` 后，生成代码使用 shadcn Checkbox；不改动其他 `role=Input` 组件。

## 改动点

- 新增映射配置文件（建议）：`[/Users/tenghuan/programming/vjshi/code/test-d2c/dsl/config/component-render-map.json](/Users/tenghuan/programming/vjshi/code/test-d2c/dsl/config/component-render-map.json)`
- 调整 codegen 读取与应用映射：`[/Users/tenghuan/programming/vjshi/code/test-d2c/scripts/dsl/codegen.mjs](/Users/tenghuan/programming/vjshi/code/test-d2c/scripts/dsl/codegen.mjs)`
- 让生成的 base 组件能输出 shadcn Checkbox（由 codegen 生成，不手改 generated）：`[/Users/tenghuan/programming/vjshi/code/test-d2c/app/generated/components/base/Input.tsx](/Users/tenghuan/programming/vjshi/code/test-d2c/app/generated/components/base/Input.tsx)`

## 方案细节

- 配置文件定义“精准匹配键”，避免误伤全局：
  - 优先键：`moduleName + name`（例如 `16711 + Component_16711_Input`）
  - 可选补充键：`fromNodes` 或 `signature`（用于二次确认）
  - 目标渲染：`renderAs: "Checkbox"`
- `codegen.mjs` 在读取 `component-map.json` 后：
  - 找到命中的 component item（仅你指定的那一项）
  - 建立 `nodeId -> renderAs` 映射（基于 `fromNodes`）
- `renderNode(...)` 渲染时按节点优先级决策：
  - `nodeId` 命中映射 => 用 `Checkbox`
  - 未命中 => 保持原 `role`（仍是 `Input`）
- `emitComponent(...)` 为 `Checkbox` 生成专用模板：
  - 引入 shadcn 组件 import（例如 `~/components/ui/checkbox`）
  - 透传 `className/style`，并给出最小可用 props（先 `checked/defaultChecked` 可选）
- 保持 composed 命名与抽取逻辑不变，只改最终渲染符号，确保回归风险最小。

## 验证

- 运行 `npm run dsl:codegen`
- 检查对应 composed/page 中目标节点是否从 `<Input ...>` 变为 `<Checkbox ...>`
- 运行 `npm run typecheck`，确保 shadcn import 与 props 类型通过
- 抽查未映射的 `Input` 节点仍按原逻辑渲染

