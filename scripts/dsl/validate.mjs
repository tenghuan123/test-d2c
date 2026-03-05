import { existsSync, readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import Ajv2020 from "ajv/dist/2020.js";
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

export function buildSchemaValidators(contractSchema) {
  const ajv = new Ajv2020({ allErrors: true, strict: false });
  const attachDefs = (schema) => ({
    ...schema,
    $defs: contractSchema.$defs || {}
  });
  return {
    index: ajv.compile(attachDefs(contractSchema.schemas.index || {})),
    componentDefinition: ajv.compile(attachDefs(contractSchema.schemas.componentDefinition || {})),
    instancePageOrModule: ajv.compile(attachDefs(contractSchema.schemas.instancePageOrModule || {})),
    registryComponents: ajv.compile(attachDefs(contractSchema.schemas.registryComponents || {})),
    dependencyGraph: ajv.compile(attachDefs(contractSchema.schemas.dependencyGraph || {}))
  };
}

export function validateJsonBySchema(validators, schemaName, data) {
  const validator = validators[schemaName];
  if (!validator) return [{ message: `unknown schema: ${schemaName}` }];
  const ok = validator(data);
  if (ok) return [];
  return (validator.errors || []).map((err) => ({
    message: `${err.instancePath || "/"} ${err.message || "invalid"}`
  }));
}

export function validateDsl(root = process.cwd()) {
  const errors = [];
  const contractDir = join(root, "dsl-contract/v1");
  const dslDir = join(root, "dsl");
  const spec = readJson(join(contractDir, "spec.json"));
  const contractSchema = readJson(join(contractDir, "schema.json"));
  const validators = buildSchemaValidators(contractSchema);

  spec.layout.requiredFiles.forEach((f) => {
    if (!existsSync(join(root, f))) {
      errors.push({ code: "E_FILE_MISSING", message: `missing: ${f}` });
    }
  });
  spec.layout.requiredDirs.forEach((d) => {
    if (!existsSync(join(root, d))) {
      errors.push({ code: "E_FILE_MISSING", message: `missing dir: ${d}` });
    }
  });

  if (errors.length > 0) {
    console.log(JSON.stringify({ ok: false, errors }, null, 2));
    process.exit(1);
  }

  const registryComponents = readJson(join(dslDir, "registry/components.json"));
  const tokens = readJson(join(dslDir, "registry/tokens.json"));
  const textStyles = readJson(join(dslDir, "registry/text-styles.json"));
  const assets = readJson(join(dslDir, "registry/assets.json"));
  const indexFile = join(dslDir, "index.json");
  if (existsSync(indexFile)) {
    validateJsonBySchema(validators, "index", readJson(indexFile)).forEach((err) => {
      errors.push({ code: "E_SCHEMA_INVALID", message: `dsl/index.json ${err.message}` });
    });
  }
  validateJsonBySchema(validators, "registryComponents", registryComponents).forEach((err) => {
    errors.push({ code: "E_SCHEMA_INVALID", message: `dsl/registry/components.json ${err.message}` });
  });
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
  walkToken({ asset: assets });
  Object.keys(textStyles || {}).forEach((k) => {
    if (k !== "schemaVersion") tokenFlat.add(`textStyle.${k}`);
  });

  const seenIds = new Set();
  const refIds = new Set();
  const componentIdToDefs = new Map();

  listJsonFiles(join(dslDir, "definitions/components")).forEach((f) => {
    const json = readJson(f);
    validateJsonBySchema(validators, "componentDefinition", json).forEach((err) => {
      errors.push({ code: "E_SCHEMA_INVALID", message: `${f} ${err.message}` });
    });
    if (!idRegex.test(json.id || "")) {
      errors.push({ code: "E_ID_INVALID", message: `invalid component id: ${json.id}` });
    }
    if (seenIds.has(`component:${json.id}`)) {
      errors.push({ code: "E_DUPLICATE_ID", message: `duplicate component id: ${json.id}` });
    }
    seenIds.add(`component:${json.id}`);
    const sourceComponentId = json?.source?.componentId;
    if (sourceComponentId) {
      if (!componentIdToDefs.has(sourceComponentId)) componentIdToDefs.set(sourceComponentId, new Set());
      componentIdToDefs.get(sourceComponentId).add(json.id);
    }
    collectTokenRefs(json.structure).forEach((ref) => {
      if (!tokenFlat.has(ref)) {
        errors.push({ code: "E_TOKEN_REF_NOT_FOUND", message: `component ${json.id} -> ${ref}` });
      }
    });
    collectComponentRefs(json.structure).forEach((ref) => refIds.add(ref));
  });

  const instanceFiles = [
    ...listJsonFiles(join(dslDir, "instances/pages")),
    ...listJsonFiles(join(dslDir, "instances/modules"))
  ];
  instanceFiles.forEach((f) => {
    const json = readJson(f);
    const schemaPayload = {
      schemaVersion: json.schemaVersion,
      id: json.id,
      kind: json.kind,
      route: json.route,
      children: json.children
    };
    validateJsonBySchema(validators, "instancePageOrModule", schemaPayload).forEach((err) => {
      errors.push({ code: "E_SCHEMA_INVALID", message: `${f} ${err.message}` });
    });
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

  componentIdToDefs.forEach((defs, componentId) => {
    if (defs.size > 1) {
      errors.push({
        code: "E_COMPONENT_ID_NOT_UNIQUE",
        message: `componentId ${componentId} maps to multiple definitions: ${Array.from(defs).sort().join(", ")}`
      });
    }
  });

  refIds.forEach((ref) => {
    if (!seenIds.has(ref)) {
      errors.push({ code: "E_REF_NOT_FOUND", message: `dangling ref: ${ref}` });
    }
  });

  const dep = readJson(join(dslDir, "graph/dependency.json"));
  validateJsonBySchema(validators, "dependencyGraph", dep).forEach((err) => {
    errors.push({ code: "E_SCHEMA_INVALID", message: `dsl/graph/dependency.json ${err.message}` });
  });
  const cycles = detectCycle(dep.nodes || {});
  if (cycles.length > 0) {
    errors.push({ code: "E_DEPENDENCY_CYCLE", message: JSON.stringify(cycles) });
  }

  return { ok: errors.length === 0, errors };
}

function run() {
  const result = validateDsl(process.cwd());
  console.log(JSON.stringify(result, null, 2));
  if (!result.ok) process.exit(1);
}

const isMain = process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1];
if (isMain) run();
