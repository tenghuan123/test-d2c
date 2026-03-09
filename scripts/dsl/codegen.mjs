import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ROOT = process.cwd();
const SKELETON_FILE = join(ROOT, "dsl/snapshots/semantic-skeleton.json");
const COMPONENT_MAP_FILE = join(ROOT, "dsl/snapshots/component-map.json");
const OUT_DIR = join(ROOT, "app/generated");
const OUT_COMPONENTS_DIR = join(OUT_DIR, "components");

function readJson(path) {
  return JSON.parse(readFileSync(path, "utf8"));
}

function toIdentifier(role) {
  const clean = String(role || "Container").replace(/[^a-zA-Z0-9]+/g, "");
  if (!clean) return "Container";
  const head = clean[0].toUpperCase() + clean.slice(1);
  if (!/^[A-Za-z]/.test(head)) return `Role${head}`;
  return head;
}

function walkRoles(node, roles = new Set()) {
  if (!node || typeof node !== "object") return roles;
  if (node.role) roles.add(toIdentifier(node.role));
  if (Array.isArray(node.children)) node.children.forEach((child) => walkRoles(child, roles));
  return roles;
}

function emitComponent(role) {
  const tagMap = {
    Header: "header",
    Footer: "footer",
    Section: "section",
    Nav: "nav",
    List: "ul",
    Title: "h2",
    Description: "p",
    Image: "img",
    Button: "button"
  };
  const tag = tagMap[role] || "div";
  if (role === "Image") {
    return `type ${role}Props = { src?: string; alt?: string; className?: string };\n\nexport function ${role}({ src = "", alt = "", className = "" }: ${role}Props) {\n  return <img src={src} alt={alt} className={className} />;\n}\n`;
  }
  return `import type { ReactNode } from "react";\n\ntype ${role}Props = { children?: ReactNode; className?: string };\n\nexport function ${role}({ children, className = "" }: ${role}Props) {\n  return <${tag} className={className}>{children}</${tag}>;\n}\n`;
}

function buildPageModules(modules = []) {
  return modules.map((mod, idx) => ({
    key: mod.id || `module-${idx}`,
    role: toIdentifier(mod.role || mod.roleFrozen || "Section"),
    title: mod.name || mod.id || `module-${idx}`
  }));
}

function run() {
  const skeleton = readJson(SKELETON_FILE);
  const componentMap = readJson(COMPONENT_MAP_FILE);
  const roles = new Set(["Container"]);
  (skeleton.modules || []).forEach((mod) => walkRoles(mod, roles));
  const sortedRoles = Array.from(roles).sort();

  mkdirSync(OUT_COMPONENTS_DIR, { recursive: true });
  sortedRoles.forEach((role) => {
    const code = emitComponent(role);
    writeFileSync(join(OUT_COMPONENTS_DIR, `${role}.tsx`), code, "utf8");
  });

  const modules = buildPageModules(skeleton.modules || []);
  const importLines = sortedRoles.map((role) => `import { ${role} } from "./components/${role}";`).join("\n");
  const roleMapEntries = sortedRoles.map((role) => `  ${role},`).join("\n");
  const modulesCode = JSON.stringify(modules, null, 2);
  const pageCode = `${importLines}

const roleComponentMap: Record<string, any> = {
${roleMapEntries}
};

const modules = ${modulesCode};

export default function Page() {
  return (
    <main className="min-h-screen">
      {modules.map((item) => {
        const Comp = roleComponentMap[item.role] || Container;
        return (
          <Comp key={item.key} className="mb-4 p-2">
            {item.title}
          </Comp>
        );
      })}
    </main>
  );
}
`;

  writeFileSync(join(OUT_DIR, "page.tsx"), pageCode, "utf8");
  console.log(
    JSON.stringify(
      {
        output: "app/generated",
        roleCount: sortedRoles.length,
        moduleCount: modules.length,
        repeatedComponentCount: Array.isArray(componentMap.components) ? componentMap.components.length : 0
      },
      null,
      2
    )
  );
}

run();
