import { createHash } from "node:crypto";
import { mkdirSync, readFileSync, writeFileSync, existsSync, readdirSync, unlinkSync } from "node:fs";
import { join } from "node:path";

const ROOT = process.cwd();
const SOURCE_FILE = join(ROOT, "mastergo-dsl.json");
const OUT_DIR = join(ROOT, "dsl");
const VERSION = "1.0.0";
const MAX_STRUCTURE_DEPTH = Number.isFinite(Number(process.env.DSL_MAX_DEPTH))
  ? Number(process.env.DSL_MAX_DEPTH)
  : 4;
const MAX_CHILDREN_PER_NODE = Number.isFinite(Number(process.env.DSL_MAX_CHILDREN))
  ? Number(process.env.DSL_MAX_CHILDREN)
  : 50;

function hash(input) {
  return createHash("sha1").update(input).digest("hex");
}

function shortHash(input) {
  return hash(input).slice(0, 8);
}

function slugify(input) {
  return String(input || "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "") || "node";
}

function ensureDir(path) {
  mkdirSync(path, { recursive: true });
}

function writeJson(path, data) {
  writeFileSync(path, JSON.stringify(data, null, 2) + "\n", "utf8");
}

function readJson(path) {
  return JSON.parse(readFileSync(path, "utf8"));
}

function resolveNode(node, nodeMap) {
  if (!node) return null;
  if (typeof node === "string") return nodeMap[node] || null;
  return node;
}

function nodeChildren(node, nodeMap) {
  const children = Array.isArray(node?.children) ? node.children : [];
  return children.map((c) => resolveNode(c, nodeMap)).filter(Boolean);
}

function collectTokenRefs(node, styleRefMap) {
  const refs = [];
  if (node?.fill && styleRefMap[node.fill]) refs.push(styleRefMap[node.fill]);
  if (node?.font && styleRefMap[node.font]) refs.push(styleRefMap[node.font]);
  if (node?.effect && styleRefMap[node.effect]) refs.push(styleRefMap[node.effect]);
  if (Array.isArray(node?.text)) {
    node.text.forEach((part) => {
      if (part?.font && styleRefMap[part.font]) refs.push(styleRefMap[part.font]);
    });
  }
  if (Array.isArray(node?.textColor)) {
    node.textColor.forEach((part) => {
      if (part?.color && styleRefMap[part.color]) refs.push(styleRefMap[part.color]);
    });
  }
  return refs;
}

function toStructure(node, nodeMap, styleRefMap, options = {}, depth = 0) {
  const next = {
    nodeType: node?.type || "UNKNOWN",
    name: node?.name || "",
    styleRefs: collectTokenRefs(node, styleRefMap),
    ext: {
      layoutStyle: node?.layoutStyle || null,
      flexContainerInfo: node?.flexContainerInfo || null,
      borderRadius: node?.borderRadius || null,
      textAlign: node?.textAlign || null,
      textMode: node?.textMode || null
    }
  };
  if (node?.type === "TEXT") {
    next.text = Array.isArray(node?.text)
      ? node.text.map((part) => ({
          text: part?.text || "",
          font: part?.font || null
        }))
      : [];
  }
  if (depth >= MAX_STRUCTURE_DEPTH) return next;
  const children = nodeChildren(node, nodeMap);
  if (children.length > 0) {
    next.children = children
      .slice(0, MAX_CHILDREN_PER_NODE)
      .map((c) => {
        if (typeof options.extractNestedComponentRef === "function" && shouldExtractComponentNode(c)) {
          const refId = options.extractNestedComponentRef(c);
          return {
            nodeType: "COMPONENT_REF",
            name: c?.name || "",
            ref: refId,
            styleRefs: collectTokenRefs(c, styleRefMap),
            ext: {
              layoutStyle: c?.layoutStyle || null,
              flexContainerInfo: c?.flexContainerInfo || null,
              borderRadius: c?.borderRadius || null,
              textAlign: c?.textAlign || null,
              textMode: c?.textMode || null
            }
          };
        }
        return toStructure(c, nodeMap, styleRefMap, options, depth + 1);
      });
  }
  return next;
}

function buildReverseGraph(nodes) {
  const reverse = {};
  Object.entries(nodes).forEach(([from, deps]) => {
    (deps || []).forEach((to) => {
      if (!reverse[to]) reverse[to] = [];
      reverse[to].push(from);
    });
  });
  Object.keys(reverse).forEach((k) => {
    reverse[k] = Array.from(new Set(reverse[k])).sort();
  });
  return reverse;
}

function normalizeStyles(styles) {
  const tokens = { color: {}, effect: {} };
  const textStyles = {};
  const assets = { images: {}, svgs: {} };
  const styleRefMap = {};
  Object.entries(styles || {}).forEach(([key, entry]) => {
    const tokenName = slugify(entry?.token || key.replace(":", "-"));
    if (key.startsWith("paint_")) {
      const colorVal = Array.isArray(entry?.value) ? entry.value[0] : entry?.value;
      if (typeof colorVal === "string") {
        tokens.color[tokenName] = colorVal;
        styleRefMap[key] = `{color.${tokenName}}`;
      } else if (colorVal && typeof colorVal === "object" && typeof colorVal.url === "string") {
        const assetKey = `${tokenName}-${shortHash(colorVal.url)}`;
        assets.images[assetKey] = {
          url: colorVal.url,
          filters: colorVal.filters || ""
        };
        styleRefMap[key] = `{asset.images.${assetKey}.url}`;
      }
    } else if (key.startsWith("effect_")) {
      tokens.effect[tokenName] = entry?.value ?? [];
      styleRefMap[key] = `{effect.${tokenName}}`;
    } else if (key.startsWith("font_")) {
      textStyles[tokenName] = entry?.value || {};
      styleRefMap[key] = `{textStyle.${tokenName}}`;
    }
  });
  return { tokens, textStyles, assets, styleRefMap };
}

function createComponentDefinition(node, nodeMap, styleRefMap, id, options = {}) {
  return {
    schemaVersion: VERSION,
    id,
    kind: "component",
    source: {
      componentId: options.componentId ?? node?.componentId ?? null,
      nodeId: node?.id || null,
      nodeType: node?.type || null
    },
    propsSchema: {},
    structure: toStructure(node, nodeMap, styleRefMap, options)
  };
}

function createModuleContainer(node, styleRefMap) {
  return {
    nodeType: node?.type || "UNKNOWN",
    sourceNodeId: node?.id || null,
    name: node?.name || "",
    styleRefs: collectTokenRefs(node, styleRefMap),
    ext: {
      layoutStyle: node?.layoutStyle || null,
      flexContainerInfo: node?.flexContainerInfo || null,
      borderRadius: node?.borderRadius || null
    }
  };
}

function shouldExtractComponentNode(node) {
  if (!node || typeof node !== "object") return false;
  return Boolean(node.componentId) || node.type === "INSTANCE" || node.type === "COMPONENT";
}

function collectComponentNodesDeep(rootNode, nodeMap) {
  const result = [];
  const visit = (node) => {
    if (!node) return;
    if (shouldExtractComponentNode(node)) result.push(node);
    nodeChildren(node, nodeMap).forEach(visit);
  };
  visit(rootNode);
  return result;
}

function collectInstanceComponentIds(rootNode, nodeMap) {
  const ids = new Set();
  const visit = (node) => {
    if (!node) return;
    if (node?.type === "INSTANCE" && node?.componentId) ids.add(String(node.componentId));
    nodeChildren(node, nodeMap).forEach(visit);
  };
  visit(rootNode);
  return ids;
}

function effectiveComponentId(node, instanceComponentIds) {
  if (node?.componentId) return String(node.componentId);
  if (node?.type === "COMPONENT" && node?.id && instanceComponentIds.has(String(node.id))) {
    return String(node.id);
  }
  return null;
}

function run() {
  const raw = readFileSync(SOURCE_FILE, "utf8");
  const input = JSON.parse(raw);
  const dsl = input.dsl || {};
  const nodeMap = dsl.nodes || {};
  const root = resolveNode(nodeMap["0"], nodeMap);
  const rootName = slugify(root?.name || "home");

  const { tokens, textStyles, assets, styleRefMap } = normalizeStyles(dsl.styles || {});
  const definitionsByKey = new Map();
  const definitions = [];
  const registryComponents = {};
  const dependencyNodes = {};
  const instanceComponentIds = collectInstanceComponentIds(root, nodeMap);

  function addDependency(from, to) {
    if (!dependencyNodes[from]) dependencyNodes[from] = [];
    dependencyNodes[from].push(to);
    dependencyNodes[from] = Array.from(new Set(dependencyNodes[from])).sort();
  }

  function upsertDefinition(node) {
    const canonicalComponentId = effectiveComponentId(node, instanceComponentIds);
    const seed = canonicalComponentId
      ? `cid:${canonicalComponentId}`
      : `nid:${node?.id || hash(JSON.stringify(node || {}))}`;
    if (definitionsByKey.has(seed)) {
      const def = definitionsByKey.get(seed);
      if (def.__building) return def.id;
      if (registryComponents[def.id]) registryComponents[def.id].usageCount += 1;
      if (node?.type === "COMPONENT" && def?.source?.nodeType !== "COMPONENT") {
        definitionsByKey.set(seed, { id: def.id, __building: true });
        const upgraded = createComponentDefinition(node, nodeMap, styleRefMap, def.id, {
          extractNestedComponentRef: upsertDefinition,
          componentId: canonicalComponentId
        });
        definitionsByKey.set(seed, upgraded);
        const idx = definitions.findIndex((item) => item.id === def.id);
        if (idx >= 0) definitions[idx] = upgraded;
        const tokenDeps = (upgraded.structure.styleRefs || []).map((r) => `token:${r.slice(1, -1)}`);
        dependencyNodes[`component:${upgraded.id}`] = Array.from(new Set(tokenDeps)).sort();
      }
      return def.id;
    }
    const id = `${slugify(node?.name || node?.type || "component")}-${shortHash(seed)}`;
    definitionsByKey.set(seed, { id, __building: true });
    const def = createComponentDefinition(node, nodeMap, styleRefMap, id, {
      extractNestedComponentRef: upsertDefinition,
      componentId: canonicalComponentId
    });
    definitionsByKey.set(seed, def);
    definitions.push(def);
    registryComponents[def.id] = {
      id: def.id,
      file: `../definitions/components/${def.id}.json`,
      usageCount: 1
    };
    const tokenDeps = (def.structure.styleRefs || []).map((r) => `token:${r.slice(1, -1)}`);
    dependencyNodes[`component:${def.id}`] = Array.from(new Set(tokenDeps)).sort();
    return def.id;
  }

  const topChildren = nodeChildren(root, nodeMap);
  const modules = [];
  const pageChildren = [];

  topChildren.forEach((child, index) => {
    const moduleId = `${slugify(child?.name || "module")}-${index + 1}`;
    const moduleRefs = [];
    const moduleContainer = createModuleContainer(child, styleRefMap);
    const directChildren = nodeChildren(child, nodeMap);
    const rootNodes = directChildren.length > 0 ? directChildren : [child];
    rootNodes.forEach((node) => {
      const componentId = upsertDefinition(node);
      moduleRefs.push({ type: "component", ref: componentId, props: {} });

      const nestedExtracted = collectComponentNodesDeep(node, nodeMap);
      nestedExtracted.slice(1).forEach((nestedNode) => {
        const nestedId = upsertDefinition(nestedNode);
        addDependency(`component:${componentId}`, `component:${nestedId}`);
      });
    });
    const mod = {
      schemaVersion: VERSION,
      id: moduleId,
      kind: "module",
      container: moduleContainer,
      children: moduleRefs
    };
    modules.push(mod);
    pageChildren.push({ type: "module", ref: moduleId });
    const moduleTokenDeps = (moduleContainer.styleRefs || []).map((r) => `token:${r.slice(1, -1)}`);
    dependencyNodes[`module:${moduleId}`] = [
      ...moduleRefs.map((n) => `component:${n.ref}`),
      ...moduleTokenDeps
    ];
  });

  const pageId = rootName || "home";
  const page = {
    schemaVersion: VERSION,
    id: pageId,
    kind: "page",
    route: "/",
    children: pageChildren
  };
  dependencyNodes[`page:${pageId}`] = pageChildren.map((n) => `module:${n.ref}`);

  const dependency = {
    schemaVersion: VERSION,
    nodes: Object.fromEntries(
      Object.entries(dependencyNodes).map(([k, v]) => [k, Array.from(new Set(v)).sort()])
    )
  };
  dependency.reverseNodes = buildReverseGraph(dependency.nodes);

  ensureDir(OUT_DIR);
  ensureDir(join(OUT_DIR, "meta"));
  ensureDir(join(OUT_DIR, "registry"));
  ensureDir(join(OUT_DIR, "definitions/components"));
  ensureDir(join(OUT_DIR, "instances/pages"));
  ensureDir(join(OUT_DIR, "instances/modules"));
  ensureDir(join(OUT_DIR, "graph"));
  ensureDir(join(OUT_DIR, "snapshots"));

  const index = {
    dslVersion: VERSION,
    schemaVersion: VERSION,
    meta: {
      project: "./meta/project.json",
      version: "./meta/version.json"
    },
    registry: "./registry",
    definitions: "./definitions/components",
    instances: {
      pages: "./instances/pages",
      modules: "./instances/modules"
    },
    graph: "./graph/dependency.json"
  };

  const projectMeta = {
    name: "mastergo-project",
    source: "mastergo-dsl.json",
    generatedAt: new Date().toISOString(),
    styleCount: Object.keys(dsl.styles || {}).length,
    rootNodeId: root?.id || "0"
  };

  const snapshot = {
    page,
    modules,
    components: definitions.map((d) => ({ id: d.id, signature: hash(JSON.stringify(d.structure)) }))
  };
  const latestSnapshotFile = join(OUT_DIR, "snapshots/structure.latest.json");
  const previousSnapshotFile = join(OUT_DIR, "snapshots/structure.prev.json");
  const diffSnapshotFile = join(OUT_DIR, "snapshots/structure.diff.json");

  let previousSnapshot = null;
  if (existsSync(latestSnapshotFile)) {
    previousSnapshot = readJson(latestSnapshotFile);
    writeJson(previousSnapshotFile, previousSnapshot);
  }

  const byId = (arr) => Object.fromEntries((arr || []).map((item) => [item.id, item]));
  const prevMap = previousSnapshot ? byId(previousSnapshot.components) : {};
  const nextMap = byId(snapshot.components);
  const added = Object.keys(nextMap).filter((id) => !prevMap[id]);
  const removed = Object.keys(prevMap).filter((id) => !nextMap[id]);
  const changed = Object.keys(nextMap).filter(
    (id) => prevMap[id] && prevMap[id].signature !== nextMap[id].signature
  );

  const snapshotDiff = {
    generatedAt: new Date().toISOString(),
    added,
    removed,
    changed
  };

  writeJson(join(OUT_DIR, "index.json"), index);
  writeJson(join(OUT_DIR, "meta/project.json"), projectMeta);
  writeJson(join(OUT_DIR, "registry/components.json"), registryComponents);
  writeJson(join(OUT_DIR, "registry/tokens.json"), {
    schemaVersion: VERSION,
    ...tokens
  });
  writeJson(join(OUT_DIR, "registry/text-styles.json"), {
    schemaVersion: VERSION,
    ...textStyles
  });
  writeJson(join(OUT_DIR, "registry/assets.json"), assets);
  const componentDefDir = join(OUT_DIR, "definitions/components");
  const expectedComponentFiles = new Set(definitions.map((def) => `${def.id}.json`));
  readdirSync(componentDefDir)
    .filter((file) => file.endsWith(".json") && !expectedComponentFiles.has(file))
    .forEach((file) => unlinkSync(join(componentDefDir, file)));
  definitions.forEach((def) => {
    writeJson(join(componentDefDir, `${def.id}.json`), def);
  });
  writeJson(join(OUT_DIR, `instances/pages/${page.id}.json`), page);
  modules.forEach((mod) => {
    writeJson(join(OUT_DIR, `instances/modules/${mod.id}.json`), mod);
  });
  writeJson(join(OUT_DIR, "graph/dependency.json"), dependency);
  writeJson(latestSnapshotFile, snapshot);
  writeJson(diffSnapshotFile, snapshotDiff);

  const outputFiles = readdirSync(join(OUT_DIR, "definitions/components")).sort();
  const versionMeta = {
    schemaVersion: VERSION,
    generatedAt: new Date().toISOString(),
    inputHash: hash(raw),
    outputHash: hash(
      JSON.stringify({
        index,
        projectMeta,
        registryComponents,
        outputFiles,
        page,
        modules,
        dependency
      })
    )
  };
  writeJson(join(OUT_DIR, "meta/version.json"), versionMeta);

  console.log(
    JSON.stringify(
      {
        page: page.id,
        modules: modules.length,
        components: definitions.length,
        tokens: Object.keys(tokens.color).length,
        snapshotDiff
      },
      null,
      2
    )
  );
}

run();
