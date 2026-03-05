import { readFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = process.cwd();
const graphFile = join(ROOT, "dsl/graph/dependency.json");

function readJson(path) {
  return JSON.parse(readFileSync(path, "utf8"));
}

export function computeImpact(changed, graph) {
  const reverse = graph.reverseNodes || {};
  const queue = [...changed];
  const seen = new Set(changed);

  while (queue.length > 0) {
    const current = queue.shift();
    const next = reverse[current] || [];
    next.forEach((dep) => {
      if (!seen.has(dep)) {
        seen.add(dep);
        queue.push(dep);
      }
    });
  }

  const impacted = Array.from(seen).sort();
  return { changed, impacted };
}

function run() {
  const args = process.argv.slice(2);
  const changedArg = args.find((a) => a.startsWith("--changed="));
  if (!changedArg) {
    console.log('用法: npm run dsl:impact -- --changed="component:xxx,token:color.xxx"');
    process.exit(1);
  }
  const changed = changedArg
    .replace("--changed=", "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);

  const graph = readJson(graphFile);
  const result = computeImpact(changed, graph);
  console.log(JSON.stringify(result, null, 2));
}

const isMain = process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1];
if (isMain) run();
