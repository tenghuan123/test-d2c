import test from "node:test";
import assert from "node:assert/strict";
import { normalizeDslInput } from "../scripts/dsl/input-adapter.mjs";

test("mastergo 输入保持透传", () => {
  const input = {
    dsl: {
      nodes: {
        "0": { id: "0", type: "FRAME", name: "home", children: [] }
      },
      styles: {}
    }
  };
  const normalized = normalizeDslInput(input, "mastergo-dsl.json");
  assert.equal(normalized.sourceType, "mastergo");
  assert.deepEqual(normalized.canonical, input);
});

test("drawer 输入归一为 canonical 结构", () => {
  const input = {
    name: "页面 1",
    type: "flex",
    children: [
      {
        id: "218:1343",
        name: "容器",
        type: "FRAME",
        layout: {
          mode: "flex",
          direction: "row",
          justify: "flex-start",
          align: "center",
          gap: 24,
          padding: { top: 8, right: 12, bottom: 8, left: 12 },
          width: 320,
          height: 72
        },
        children: [
          {
            id: "218:1344",
            name: "购物车",
            type: "TEXT",
            text: {
              value: "购物车",
              fontSize: 24,
              fontWeight: 400,
              lineHeight: 36,
              letterSpacing: 0,
              color: "#0d0d0d"
            }
          },
          {
            id: "218:2873",
            name: "closed-2 2",
            type: "INSTANCE",
            component: {
              componentId: "218:1909",
              variant: {
                "属性 1": "nor"
              }
            }
          }
        ]
      }
    ]
  };

  const normalized = normalizeDslInput(input, "drawer-dsl.json");
  assert.equal(normalized.sourceType, "drawer");
  assert.ok(normalized.canonical?.dsl?.nodes?.["0"]);
  assert.ok(Object.keys(normalized.canonical.dsl.styles).some((k) => k.startsWith("paint_drawer_")));
  assert.ok(Object.keys(normalized.canonical.dsl.styles).some((k) => k.startsWith("font_drawer_")));

  const container = normalized.canonical.dsl.nodes["218:1343"];
  assert.equal(container.flexContainerInfo.flexDirection, "row");
  assert.equal(container.flexContainerInfo.justifyContent, "flex-start");
  assert.equal(container.flexContainerInfo.alignItems, "center");
  assert.equal(container.flexContainerInfo.gap, "24px");

  const textNode = normalized.canonical.dsl.nodes["218:1344"];
  assert.equal(textNode.type, "TEXT");
  assert.equal(textNode.text[0].text, "购物车");
  assert.ok(textNode.text[0].font.startsWith("font_drawer_"));
  assert.ok(textNode.textColor[0].color.startsWith("paint_drawer_"));

  const instanceNode = normalized.canonical.dsl.nodes["218:2873"];
  assert.equal(instanceNode.componentId, "218:1909");
  assert.equal(instanceNode.componentInfo.properties["属性 1"], "nor");
});
