---
name: DSL落地分步计划
overview: 将现有 MasterGo 单文件 DSL 拆解为可工程化目录 DSL，并以“先规范、再转换、再校验、再增量”的方式分步推进。每一步都有可验收产物，便于你逐步确认后继续。
todos:
  - id: freeze-v1-spec
    content: 冻结 DSL v1 的目录、字段、命名与引用规范
    status: completed
  - id: define-json-schemas
    content: 为各类 DSL 文件建立 JSON Schema 与错误码约束
    status: completed
  - id: mapping-mastergo-to-v1
    content: 完成 mastergo 输入到 DSL v1 的字段映射表与降级策略
    status: completed
  - id: build-mvp-transformer
    content: 实现可跑通的转换管线并产出完整 /dsl 目录
    status: completed
  - id: add-dependency-incremental
    content: 实现 dependency 图与最小影响面增量重编译
    status: completed
  - id: add-snapshot-versioning
    content: 补齐版本信息、结构快照与 diff 机制
    status: completed
isProject: false
---

# DSL 工程化落地计划

## 目标

基于现有输入（`[mastergo-dsl.json](/Users/tenghuan/programming/vjshi/code/test-d2c/mastergo-dsl.json)` 与设计草案 `[dd.md](/Users/tenghuan/programming/vjshi/code/test-d2c/docs/dd.md)`），完成一套可编译、可校验、可增量更新的 DSL v1。

## 分步实施

### 第 1 步：冻结 DSL v1 规范（先定标准）

- 产出规范文档：目录结构、文件职责、命名规则、ID 规则、引用规则。
- 明确三层边界：`registry`（全局定义）、`definitions`（组件定义）、`instances`（页面/模块实例）。
- 固定最小必填字段：`schemaVersion`、`id`、`kind`、`children/ref/props`。
- 验收：你确认“字段与目录”后，不再频繁改模型。

### 第 2 步：定义 Schema 与校验规则（保证可执行）

- 为 `index/meta/registry/definitions/instances/graph` 建立 JSON Schema。
- 约束：类型、必填、枚举、token 引用格式、ref 存在性。
- 输出错误码约定（如：`E_REF_NOT_FOUND`、`E_PROP_INVALID`）。
- 验收：给任意 DSL 文件可得到结构化校验结果。

### 第 3 步：做 MasterGo -> DSL 的字段映射表（先映射再写代码）

- 针对当前输入先做映射清单：`styles -> registry/tokens`、节点树 -> `instances`、可复用结构 -> `definitions`。
- 定义 ID 生成策略与去重策略（稳定 hash + 可读别名）。
- 规定“无法映射字段”的降级策略（忽略/挂载到 ext）。
- 验收：映射表覆盖主要字段，并有未覆盖清单。

### 第 4 步：实现转换管线 MVP（先跑通）

- 流程：读取原始 DSL -> 清洗 -> 抽取 tokens/components/modules/pages -> 生成 `index` 与 `dependency`。
- 输出目录遵循 v1 规范，保证可按需加载。
- 验收：能从一个输入生成完整 `/dsl` 目录。

### 第 5 步：补齐依赖图与增量策略（控制成本）

- 构建 `graph/dependency.json`：页面/模块/组件/token 依赖关系。
- 实现影响面计算：某组件或 token 变更时，仅重编译受影响节点。
- 验收：给定变更点，能输出最小重编译集合。

### 第 6 步：加稳定性保障（可长期维护）

- 增加快照与 diff（结构 diff，不做视觉 diff）。
- 增加版本文件（输入 hash、产物 hash、生成时间）。
- 验收：同输入多次生成结果稳定；变更可追踪。

## 执行顺序建议（一步一步来）

- 先做第 1 步 + 第 2 步（标准与约束）。
- 再做第 3 步（映射表），确认后才开始第 4 步写转换代码。
- 第 5/6 步最后收口。

## 本轮建议先做

- 立即开始第 1 步：把 `[dd.md](/Users/tenghuan/programming/vjshi/code/test-d2c/docs/dd.md)` 收敛成“最终 DSL v1 规范稿（字段级）”。

