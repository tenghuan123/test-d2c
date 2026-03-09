import { copyFileSync, existsSync, mkdirSync, readdirSync, rmSync } from "node:fs";
import { execSync } from "node:child_process";
import { basename, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = process.cwd();
const DEFAULT_SOURCE = "assets";
const PUBLIC_ASSETS_DIR = join(ROOT, "public/assets");
const BUILD_SCRIPT = join(ROOT, "scripts/dsl/build-dsl.mjs");

function resolveSourceDir() {
  const arg = process.argv.find((item) => item.startsWith("--source="));
  const fromArg = arg ? arg.slice("--source=".length).replace(/\/$/, "") : "";
  const source = fromArg || DEFAULT_SOURCE;
  return join(ROOT, source);
}

function ensureDir(path) {
  if (!existsSync(path)) {
    mkdirSync(path, { recursive: true });
  }
}

function copyDir(src, dest) {
  if (!existsSync(src)) {
    throw new Error(`source directory not found: ${src}`);
  }
  if (existsSync(dest)) {
    rmSync(dest, { recursive: true, force: true });
  }
  ensureDir(dest);
  
  const entries = readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = join(src, entry.name);
    const destPath = join(dest, entry.name);
    if (entry.isDirectory()) {
      ensureDir(destPath);
      copyDir(srcPath, destPath);
    } else {
      copyFileSync(srcPath, destPath);
    }
  }
}

function runBuildDsl(inputPath) {
  const cmd = `node ${BUILD_SCRIPT} --input=${inputPath}`;
  console.log(`Running: ${cmd}`);
  execSync(cmd, { stdio: "inherit", cwd: ROOT });
}

async function run() {
  const sourceDir = resolveSourceDir();
  const dslFile = join(sourceDir, "dsl.json");
  const assetDir = join(sourceDir, "asset");
  
  console.log(`Source directory: ${sourceDir}`);
  
  if (!existsSync(dslFile)) {
    throw new Error(`dsl.json not found: ${dslFile}`);
  }
  
  if (!existsSync(assetDir)) {
    throw new Error(`asset directory not found: ${assetDir}`);
  }
  
  console.log(`Copying assets to public/assets...`);
  copyDir(assetDir, PUBLIC_ASSETS_DIR);
  
  console.log(`Building DSL from ${dslFile}...`);
  runBuildDsl(dslFile);
  
  console.log("Done!");
}

const isMain = process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1];
if (isMain) {
  run().catch((err) => {
    console.error(err.message);
    process.exit(1);
  });
}

export { run, resolveSourceDir, copyDir };
