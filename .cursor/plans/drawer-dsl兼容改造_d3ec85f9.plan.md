---
name: drawer-dsl兼容改造
overview: 采用你选的 A 路线：新增输入适配层，把 `drawer-dsl.json` 先归一成现有 `mastergo` 中间形态，再复用当前完整 pipeline（build/validate/semantic/codegen）。目标是最小改动打通全链路，并保证旧输入不回归。
todos:
  - id: add-input-adapter
    content: 新增 input-adapter，支持 drawer 与 mastergo 双输入归一
    status: completed
  - id: wire-build-entry
    content: 接入 build-dsl 入口并增加 sourceType/fail-fast 逻辑
    status: completed
  - id: map-drawer-fields
    content: 完成 layout/style/text/component 到 canonical 字段映射
    status: completed
  - id: update-contract-mapping
    content: 补充 dsl-contract 的 drawer 映射说明
    status: completed
  - id: run-full-pipeline-check
    content: 对 drawer 与 mastergo 分别执行全链路验证并比对结果
    status: completed
isProject: false
---

# Drawer DSL 兼容改造计划

## 目标

在不破坏现有 `mastergo` 输入链路的前提下，支持 `drawer-dsl.json` 作为输入并跑通完整流程：`dsl:build -> dsl:validate -> dsl:semantic -> dsl:codegen`。

## 改造范围

- 构建入口与输入探测：`[/Users/tenghuan/programming/vjshi/code/test-d2c/scripts/dsl/build-dsl.mjs](/Users/tenghuan/programming/vjshi/code/test-d2c/scripts/dsl/build-dsl.mjs)`
- 适配器（新增）：`[/Users/tenghuan/programming/vjshi/code/test-d2c/scripts/dsl/input-adapter.mjs](/Users/tenghuan/programming/vjshi/code/test-d2c/scripts/dsl/input-adapter.mjs)`
- 映射契约（补充 drawer 来源）：`[/Users/tenghuan/programming/vjshi/code/test-d2c/dsl-contract/v1/mapping.mastergo.json](/Users/tenghuan/programming/vjshi/code/test-d2c/dsl-contract/v1/mapping.mastergo.json)`
- 质量门禁（新增/更新测试）：`[/Users/tenghuan/programming/vjshi/code/test-d2c/tests](/Users/tenghuan/programming/vjshi/code/test-d2c/tests)`
- 流程脚本（如需）：`[/Users/tenghuan/programming/vjshi/code/test-d2c/package.json](/Users/tenghuan/programming/vjshi/code/test-d2c/package.json)`

## 实施步骤

1. 在 `build-dsl` 前插入输入识别与归一化：
  - 识别 `mastergo`（`input.dsl.nodes/styles`）与 `drawer`（根节点 `children/layout/style/text/component`）两种形态。
  - 统一输出中间结构：`{ dsl: { nodes, styles, components } }`，并返回 `sourceType`。
2. 新增 `drawer -> canonical` 适配规则（仅最小必需字段）：
  - 节点树扁平化到 `dsl.nodes`，补根 ID `"0"`。
  - `layout` 映射到 `layoutStyle/flexContainerInfo`（保障 tailwind/semantic 兼容）。
  - `style.background/border`、`text.*` 提取为 `dsl.styles` 与节点引用（`fill/font/effect/textColor` 或等价字段）。
  - `component.componentId` 提升为节点级 `componentId`，保留 `variant` 到 `componentInfo.properties`。
3. 调整 `build-dsl` 元信息与 fail-fast：
  - `meta/project.json.source` 使用实际输入文件名。
  - 无法识别输入格式时直接报错，避免“空产物成功”。
4. 补充契约映射说明：
  - 在映射文件中增加 drawer 来源映射段（或新增 drawer mapping 并在 build 中选择）。
5. 验证完整 pipeline：
  - 用 `drawer-dsl.json` 跑 `dsl:build/validate/semantic/codegen`。
  - 用 `mastergo-dsl.json` 回归，确认输出结构与关键数量级不异常（components/modules/tokens）。

## 验收标准

- `drawer-dsl.json` 可稳定产出非空 `dsl/` 结构并通过 `dsl:validate`。
- `dsl/snapshots/semantic-skeleton.json` 与 `app/generated/*` 正常生成。
- 旧 `mastergo` 输入不回归（同命令可继续工作）。
- 对异常输入给出明确错误信息，不再静默成功。

