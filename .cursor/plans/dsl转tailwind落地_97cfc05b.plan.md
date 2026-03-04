---
name: DSL转Tailwind落地
overview: 实现一套可复用的 DSL->Tailwind 转换器，并接入现有预览页，采用“优先 Tailwind 类名，不可表达则 style 兜底”的混合策略。
todos:
  - id: build-mapper
    content: 新增 DSL->Tailwind 映射函数，输出 className 与 style 兜底
    status: completed
  - id: script-export
    content: 新增脚本批量转换组件并输出快照结果
    status: completed
  - id: wire-rebuild-page
    content: 在 app/dsl/rebuild.tsx 接入转换输出进行渲染
    status: completed
  - id: verify-samples
    content: 用 3615 等样例验证转换准确性与兜底行为
    status: completed
isProject: false
---

# DSL 到 Tailwind 落地方案

## 目标

- 从 `dsl` 结构节点（重点是 `layoutStyle`、`flexContainerInfo`、`styleRefs`）生成稳定的 `className`。
- 提供独立转换脚本，便于批量验证与后续流水线接入。
- 在预览页接入转换结果，直观看到 Tailwind 输出效果。

## 改动范围

- 新增转换器：`[/Users/tenghuan/programming/vjshi/code/test-d2c/scripts/dsl/to-tailwind.mjs](/Users/tenghuan/programming/vjshi/code/test-d2c/scripts/dsl/to-tailwind.mjs)`
- 复用 token 数据：`[/Users/tenghuan/programming/vjshi/code/test-d2c/dsl/registry/tokens.json](/Users/tenghuan/programming/vjshi/code/test-d2c/dsl/registry/tokens.json)`
- 接入预览页：`[/Users/tenghuan/programming/vjshi/code/test-d2c/app/dsl/rebuild.tsx](/Users/tenghuan/programming/vjshi/code/test-d2c/app/dsl/rebuild.tsx)`
- 可选新增产物（便于调试）：`[/Users/tenghuan/programming/vjshi/code/test-d2c/dsl/snapshots/tailwind.latest.json](/Users/tenghuan/programming/vjshi/code/test-d2c/dsl/snapshots/tailwind.latest.json)`

## 实现步骤

1. 在转换器中实现 `node -> { className, style }`：
  - `flexContainerInfo` 映射：`flexDirection/justifyContent/alignItems/gap/padding` -> Tailwind。
  - `layoutStyle` 映射：`width/height` -> `w-[xpx]/h-[xpx]`（可表达时）；其余保留到 `style`。
  - `styleRefs` 映射：从 token 解析背景色、渐变，能用类名则用类名，不能则写入 `style.background/backgroundImage`。
2. 提供类名归一化：
  - 去重、排序（保证输出稳定）。
  - 空值过滤，避免生成无效类。
3. 在脚本中增加批量导出：
  - 输入 `dsl/definitions/components/*.json`。
  - 输出每个节点的 `className/style` 快照 JSON，便于检查转换覆盖率。
4. 在 `app/dsl/rebuild.tsx` 接入：
  - 复用同一套映射函数（或共享模块）。
  - 渲染时 `className={...}` + `style={...}`，替换当前偏内联 style 的逻辑。
5. 验证与收口：
  - 用 `3615-d37f156b` 等组件做样例验证，确保 `padding/flex/size/color` 输出符合预期。
  - 对无法表达项保留 `style` 兜底，避免视觉回退。

## 关键规则（首版）

- 优先产出 Tailwind：`flex*`、`items*`、`justify*`、`px/py`、`w/h`。
- Token 颜色优先 `bg-[value]`（如 `bg-[#0D0D0D]`）；渐变优先保留内联背景。
- 坐标类字段（如 `relativeX/relativeY`）首版不强制映射定位，避免语义误判。

