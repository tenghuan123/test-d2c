import { existsSync, readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";

const ROOT = process.cwd();
const CONTRACT_DIR = join(ROOT, "dsl-contract/v1");
const DSL_DIR = join(ROOT, "dsl");
const idRegex = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const tokenRefRegex = /^\{[a-zA-Z0-9._-]+\}$/;

function readJson(path) {
  return JSON.parse(readFileSync(path, "utf8"));
}

function listJsonFiles(dir) {
  return readdirSync(dir).filter((f) => f.endsWith(".json")).map((f) => join(dir, f));
}

function collectTokenRefs(value, refs = []) {
  if (typeof value === "string" && tokenRefRegex.test(value)) {
    refs.push(value.slice(1, -1));
    return refs;
  }
  if (Array.isArray(value)) {
    value.forEach((v) => collectTokenRefs(v, refs));
    return refs;
  }
  if (value && typeof value === "object") {
    Object.values(value).forEach((v) => collectTokenRefs(v, refs));
  }
  return refs;
}

function collectComponentRefs(value, refs = []) {
  if (Array.isArray(value)) {
    value.forEach((v) => collectComponentRefs(v, refs));
    return refs;
  }
  if (value && typeof value === "object") {
    if (value.nodeType === "COMPONENT_REF" && typeof value.ref === "string") {
      refs.push(`component:${value.ref}`);
    }
    Object.values(value).forEach((v) => collectComponentRefs(v, refs));
  }
  return refs;
}

function detectCycle(graph) {
  const visiting = new Set();
  const visited = new Set();
  const cycles = [];
  const nodes = Object.keys(graph || {});

  function dfs(node, stack) {
    if (visiting.has(node)) {
      const idx = stack.indexOf(node);
      cycles.push(stack.slice(idx).concat(node));
      return;
    }
    if (visited.has(node)) return;
    visiting.add(node);
    (graph[node] || []).forEach((dep) => dfs(dep, stack.concat(node)));
    visiting.delete(node);
    visited.add(node);
  }

  nodes.forEach((n) => dfs(n, []));
  return cycles;
}

function run() {
  const errors = [];
  const spec = readJson(join(CONTRACT_DIR, "spec.json"));

  spec.layout.requiredFiles.forEach((f) => {
    if (!existsSync(join(ROOT, f))) {
      errors.push({ code: "E_FILE_MISSING", message: `missing: ${f}` });
    }
  });
  spec.layout.requiredDirs.forEach((d) => {
    if (!existsSync(join(ROOT, d))) {
      errors.push({ code: "E_FILE_MISSING", message: `missing dir: ${d}` });
    }
  });

  if (errors.length > 0) {
    console.log(JSON.stringify({ ok: false, errors }, null, 2));
    process.exit(1);
  }

  const registryComponents = readJson(join(DSL_DIR, "registry/components.json"));
  const tokens = readJson(join(DSL_DIR, "registry/tokens.json"));
  const textStyles = readJson(join(DSL_DIR, "registry/text-styles.json"));
  const tokenFlat = new Set();
  const walkToken = (obj, prefix = "") => {
    Object.entries(obj || {}).forEach(([k, v]) => {
      if (k === "schemaVersion") return;
      const key = prefix ? `${prefix}.${k}` : k;
      if (v && typeof v === "object" && !Array.isArray(v)) {
        walkToken(v, key);
      } else {
        tokenFlat.add(key);
      }
    });
  };
  walkToken(tokens);
  walkToken({ textStyle: textStyles });
  Object.keys(textStyles || {}).forEach((k) => {
    if (k !== "schemaVersion") tokenFlat.add(`textStyle.${k}`);
  });

  const seenIds = new Set();
  const refIds = new Set();

  listJsonFiles(join(DSL_DIR, "definitions/components")).forEach((f) => {
    const json = readJson(f);
    if (!idRegex.test(json.id || "")) {
      errors.push({ code: "E_ID_INVALID", message: `invalid component id: ${json.id}` });
    }
    if (seenIds.has(`component:${json.id}`)) {
      errors.push({ code: "E_DUPLICATE_ID", message: `duplicate component id: ${json.id}` });
    }
    seenIds.add(`component:${json.id}`);
    collectTokenRefs(json.structure).forEach((ref) => {
      if (!tokenFlat.has(ref)) {
        errors.push({ code: "E_TOKEN_REF_NOT_FOUND", message: `component ${json.id} -> ${ref}` });
      }
    });
    collectComponentRefs(json.structure).forEach((ref) => refIds.add(ref));
  });

  const instanceFiles = [
    ...listJsonFiles(join(DSL_DIR, "instances/pages")),
    ...listJsonFiles(join(DSL_DIR, "instances/modules"))
  ];
  instanceFiles.forEach((f) => {
    const json = readJson(f);
    if (!idRegex.test(json.id || "")) {
      errors.push({ code: "E_ID_INVALID", message: `invalid instance id: ${json.id}` });
    }
    if (seenIds.has(`${json.kind}:${json.id}`)) {
      errors.push({ code: "E_DUPLICATE_ID", message: `duplicate instance id: ${json.kind}:${json.id}` });
    }
    seenIds.add(`${json.kind}:${json.id}`);
    if (json.kind === "module" && json.container) {
      collectTokenRefs(json.container).forEach((ref) => {
        if (!tokenFlat.has(ref)) {
          errors.push({ code: "E_TOKEN_REF_NOT_FOUND", message: `module ${json.id} -> ${ref}` });
        }
      });
    }
    (json.children || []).forEach((child) => {
      if (!child?.type || !child?.ref) {
        errors.push({ code: "E_REQUIRED_FIELD_MISSING", message: `${json.id} child missing type/ref` });
        return;
      }
      refIds.add(`${child.type}:${child.ref}`);
    });
  });

  Object.values(registryComponents).forEach((entry) => {
    if (!seenIds.has(`component:${entry.id}`)) {
      errors.push({ code: "E_REF_NOT_FOUND", message: `registry missing component file: ${entry.id}` });
    }
  });

  refIds.forEach((ref) => {
    if (!seenIds.has(ref)) {
      errors.push({ code: "E_REF_NOT_FOUND", message: `dangling ref: ${ref}` });
    }
  });

  const dep = readJson(join(DSL_DIR, "graph/dependency.json"));
  const cycles = detectCycle(dep.nodes || {});
  if (cycles.length > 0) {
    errors.push({ code: "E_DEPENDENCY_CYCLE", message: JSON.stringify(cycles) });
  }

  const result = { ok: errors.length === 0, errors };
  console.log(JSON.stringify(result, null, 2));
  if (!result.ok) process.exit(1);
}

run();
