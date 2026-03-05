import test from "node:test";
import assert from "node:assert/strict";
import { computeImpact } from "../scripts/dsl/impact.mjs";

test("impact 反向依赖可传递展开", () => {
  const graph = {
    reverseNodes: {
      "token:color.primary": ["component:button"],
      "component:button": ["module:header"],
      "module:header": ["page:home"]
    }
  };
  const result = computeImpact(["token:color.primary"], graph);
  assert.deepEqual(result.impacted, [
    "component:button",
    "module:header",
    "page:home",
    "token:color.primary"
  ]);
});
