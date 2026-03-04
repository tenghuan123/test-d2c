import { mkdirSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { mapDslTreeToTailwind } from "../../dsl/tailwind-mapper.js";

const ROOT = process.cwd();
const COMPONENTS_DIR = join(ROOT, "dsl/definitions/components");
const TOKENS_FILE = join(ROOT, "dsl/registry/tokens.json");
const OUT_FILE = join(ROOT, "dsl/snapshots/tailwind.latest.json");

function readJson(path) {
  return JSON.parse(readFileSync(path, "utf8"));
}

function writeJson(path, data) {
  writeFileSync(path, JSON.stringify(data, null, 2) + "\n", "utf8");
}

function run() {
  const tokens = readJson(TOKENS_FILE);
  const tokenStore = tokens;
  const files = readdirSync(COMPONENTS_DIR).filter((f) => f.endsWith(".json")).sort();

  const components = files.map((file) => {
    const full = join(COMPONENTS_DIR, file);
    const definition = readJson(full);
    return {
      id: definition.id,
      file: `definitions/components/${file}`,
      mapped: mapDslTreeToTailwind(definition.structure || {}, tokenStore)
    };
  });

  mkdirSync(join(ROOT, "dsl/snapshots"), { recursive: true });
  writeJson(OUT_FILE, {
    schemaVersion: "1.0.0",
    generatedAt: new Date().toISOString(),
    componentCount: components.length,
    components
  });

  console.log(
    JSON.stringify(
      {
        output: "dsl/snapshots/tailwind.latest.json",
        componentCount: components.length
      },
      null,
      2
    )
  );
}

run();
