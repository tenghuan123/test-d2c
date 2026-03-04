---
name: dsl-end-to-end
description: Designs and iterates an engineering DSL spec from dd.md, converts mastergo-dsl.json into a directory-based DSL output, then validates schema and computes impact scope. Use when user mentions DSL设计、MasterGo转换、DSL校验、增量影响面、dependency图、snapshot diff.
---

# DSL End To End

## 目标
把 `docs/dd.md` + `mastergo-dsl.json` 变成可落地 DSL，并完成校验与增量分析。

## 默认执行流程
1. 读取 `docs/dd.md`，先冻结字段与目录边界（registry/definitions/instances）。
2. 若存在 `scripts/dsl/build-dsl.mjs`，执行 `npm run dsl:build`。
3. 执行 `npm run dsl:validate`，输出失败项（错误码优先）。
4. 用户给变更点时执行：`npm run dsl:impact -- --changed="component:xxx,token:color.xxx"`。
5. 需要结构变化时执行 `npm run dsl:diff`。

## 输出要求
- 默认中文，简短。
- 先给结果，再给必要细节。
- 不额外写无关文档、示例代码、测试代码。
- 发现缺字段时先补最小必需字段，不做过度抽象。

## 约束
- 只改 DSL 相关路径：`dsl-contract/`、`scripts/dsl/`、`dsl/`。
- 优先复用已有脚本，不重复造轮子。
- 如果用户只要求某一步，只执行那一步。
