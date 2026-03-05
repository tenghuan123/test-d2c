import test from "node:test";
import assert from "node:assert/strict";
import { mapDslNodeToTailwind } from "../dsl/tailwind-mapper.js";

test("tailwind 映射 row + gap + padding", () => {
  const node = {
    nodeType: "FRAME",
    ext: {
      layoutStyle: { width: 120, height: 40 },
      borderRadius: "8px",
      flexContainerInfo: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "16px",
        padding: "8px 12px"
      }
    }
  };
  const mapped = mapDslNodeToTailwind(node, {});
  assert.equal(mapped.errors.length, 0);
  assert.match(mapped.className, /\bflex\b/);
  assert.match(mapped.className, /\bflex-row\b/);
  assert.match(mapped.className, /\bgap-4\b/);
  assert.match(mapped.className, /\bpy-2\b/);
  assert.match(mapped.className, /\bpx-3\b/);
});
