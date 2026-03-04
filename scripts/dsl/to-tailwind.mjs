import { mkdirSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { mapDslTreeToTailwind } from "../../dsl/tailwind-mapper.js";

const ROOT = process.cwd();
const COMPONENTS_DIR = join(ROOT, "dsl/definitions/components");
const TOKENS_FILE = join(ROOT, "dsl/registry/tokens.json");
const TEXT_STYLES_FILE = join(ROOT, "dsl/registry/text-styles.json");
const OUT_FILE = join(ROOT, "dsl/snapshots/tailwind.latest.json");
const ENABLE_POSITION = process.env.DSL_ENABLE_POSITION === "1";

function readJson(path) {
  return JSON.parse(readFileSync(path, "utf8"));
}

function writeJson(path, data) {
  writeFileSync(path, JSON.stringify(data, null, 2) + "\n", "utf8");
}

function mapToObject(map) {
  return Object.fromEntries(Array.from(map.entries()).sort(([a], [b]) => a.localeCompare(b)));
}

function mergeCount(target, source, factor = 1) {
  source.forEach((count, key) => {
    target.set(key, (target.get(key) || 0) + count * factor);
  });
}

function collectDirectRefs(node, counts = new Map()) {
  if (!node || typeof node !== "object") return counts;
  if (node.nodeType === "COMPONENT_REF" && typeof node.ref === "string" && node.ref) {
    counts.set(node.ref, (counts.get(node.ref) || 0) + 1);
  }
  if (Array.isArray(node.children)) {
    node.children.forEach((child) => collectDirectRefs(child, counts));
  }
  return counts;
}

function run() {
  const tokens = readJson(TOKENS_FILE);
  const textStyles = readJson(TEXT_STYLES_FILE);
  const tokenStore = { ...tokens, textStyle: textStyles };
  const files = readdirSync(COMPONENTS_DIR).filter((f) => f.endsWith(".json")).sort();

  const components = files.map((file) => {
    const full = join(COMPONENTS_DIR, file);
    const definition = readJson(full);
    const mapped = mapDslTreeToTailwind(definition.structure || {}, tokenStore, {
      enablePosition: ENABLE_POSITION
    });
    return {
      id: definition.id,
      sourceComponentId: definition?.source?.componentId || null,
      file: `definitions/components/${file}`,
      mapped
    };
  });

  const directByComponent = new Map();
  components.forEach((component) => {
    directByComponent.set(component.id, collectDirectRefs(component.mapped));
  });

  const unresolvedRefs = new Set();
  const cyclicRefs = new Set();
  const expandedMemo = new Map();
  function expandRefs(componentId, stack = []) {
    if (expandedMemo.has(componentId)) return expandedMemo.get(componentId);
    const direct = directByComponent.get(componentId) || new Map();
    const expanded = new Map();
    direct.forEach((count, refId) => {
      expanded.set(refId, (expanded.get(refId) || 0) + count);
      if (!directByComponent.has(refId)) {
        unresolvedRefs.add(refId);
        return;
      }
      if (stack.includes(refId)) {
        cyclicRefs.add(`${componentId}->${refId}`);
        return;
      }
      const nested = expandRefs(refId, stack.concat(componentId));
      mergeCount(expanded, nested, count);
    });
    expandedMemo.set(componentId, expanded);
    return expanded;
  }

  const aggregateDirect = new Map();
  const aggregateExpanded = new Map();
  const componentRefStats = components.map((component) => {
    const direct = directByComponent.get(component.id) || new Map();
    const expanded = expandRefs(component.id) || new Map();
    mergeCount(aggregateDirect, direct);
    mergeCount(aggregateExpanded, expanded);
    return {
      id: component.id,
      sourceComponentId: component.sourceComponentId,
      directRefCounts: mapToObject(direct),
      expandedRefCounts: mapToObject(expanded)
    };
  });

  mkdirSync(join(ROOT, "dsl/snapshots"), { recursive: true });
  writeJson(OUT_FILE, {
    schemaVersion: "1.0.0",
    generatedAt: new Date().toISOString(),
    componentCount: components.length,
    components,
    refStats: {
      directRefCounts: mapToObject(aggregateDirect),
      expandedRefCounts: mapToObject(aggregateExpanded),
      unresolvedRefs: Array.from(unresolvedRefs).sort(),
      cyclicRefs: Array.from(cyclicRefs).sort(),
      byComponent: componentRefStats
    }
  });

  console.log(
    JSON.stringify(
      {
        output: "dsl/snapshots/tailwind.latest.json",
        componentCount: components.length,
        enablePosition: ENABLE_POSITION
      },
      null,
      2
    )
  );
}

run();
