import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { buildSchemaValidators, validateJsonBySchema } from "../scripts/dsl/validate.mjs";

const ROOT = process.cwd();
const schemaPath = join(ROOT, "dsl-contract/v1/schema.json");
const contractSchema = JSON.parse(readFileSync(schemaPath, "utf8"));
const validators = buildSchemaValidators(contractSchema);

test("componentDefinition 缺少必填字段会被 schema 拦截", () => {
  const invalid = {
    schemaVersion: "1.0.0",
    id: "demo-component",
    kind: "component",
    propsSchema: {}
  };
  const errors = validateJsonBySchema(validators, "componentDefinition", invalid);
  assert.ok(errors.length > 0);
});
