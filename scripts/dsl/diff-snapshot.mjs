import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

const ROOT = process.cwd();
const diffFile = join(ROOT, "dsl/snapshots/structure.diff.json");

function run() {
  if (!existsSync(diffFile)) {
    console.log(JSON.stringify({ ok: false, message: "snapshot diff 不存在，请先运行 dsl:build" }, null, 2));
    process.exit(1);
  }
  const diff = JSON.parse(readFileSync(diffFile, "utf8"));
  console.log(JSON.stringify({ ok: true, diff }, null, 2));
}

run();
