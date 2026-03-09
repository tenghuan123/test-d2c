import { mkdirSync, readdirSync, readFileSync, unlinkSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ROOT = process.cwd();
const SKELETON_FILE = join(ROOT, "dsl/snapshots/semantic-skeleton.json");
const COMPONENT_MAP_FILE = join(ROOT, "dsl/snapshots/component-map.json");
const TAILWIND_FILE = join(ROOT, "dsl/snapshots/tailwind.latest.json");
const OUT_DIR = join(ROOT, "app/generated");
const OUT_COMPONENTS_DIR = join(OUT_DIR, "components/base");
const OUT_COMPOSED_COMPONENTS_DIR = join(OUT_DIR, "components/composed");

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

function slugify(input) {
  return String(input || "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "") || "node";
}

function getChildren(node) {
  return Array.isArray(node?.children) ? node.children : [];
}

function collectNodeIndex(nodes = [], map = new Map()) {
  nodes.forEach((node) => {
    if (!node || typeof node !== "object") return;
    if (node.id) map.set(node.id, node);
    collectNodeIndex(getChildren(node), map);
  });
  return map;
}

function collectTailwindNodeMap(tailwindSnapshot = {}) {
  const nodeMap = new Map();
  const visit = (mappedNode) => {
    if (!mappedNode || typeof mappedNode !== "object") return;
    const id = String(mappedNode.id || "").trim();
    const name = String(mappedNode.name || "").trim();
    const className = String(mappedNode.className || "").trim();
    const style = mappedNode.style && typeof mappedNode.style === "object" ? mappedNode.style : {};
    if (id) {
      nodeMap.set(id, { className, style });
    } else if (name && !nodeMap.has(`name:${name}`)) {
      nodeMap.set(`name:${name}`, { className, style });
    }
    if (Array.isArray(mappedNode.children)) {
      mappedNode.children.forEach(visit);
    }
  };
  const components = Array.isArray(tailwindSnapshot.components) ? tailwindSnapshot.components : [];
  components.forEach((item) => visit(item.mapped));
  return nodeMap;
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
    return `import type { CSSProperties } from "react";

type ${role}Props = { src?: string; alt?: string; className?: string; style?: CSSProperties };

export function ${role}({ src = "", alt = "", className = "", style }: ${role}Props) {
  return <img src={src} alt={alt} className={className} style={style} />;
}
`;
  }
  if (role === "Text" || role === "Title" || role === "Description") {
    return `import type { CSSProperties } from "react";

type ${role}Props = { value?: string; className?: string; style?: CSSProperties };

export function ${role}({ value = "", className = "", style }: ${role}Props) {
  return <${tag} className={className} style={style}>{value}</${tag}>;
}
`;
  }
  return `import type { CSSProperties, ReactNode } from "react";

type ${role}Props = { children?: ReactNode; className?: string; style?: CSSProperties };

export function ${role}({ children, className = "", style }: ${role}Props) {
  return <${tag} className={className} style={style}>{children}</${tag}>;
}
`;
}

function normalizeClassName(value) {
  return String(value || "").trim().replace(/\s+/g, " ");
}

function escapedLiteral(input) {
  return JSON.stringify(String(input || ""));
}

function styleToLiteral(style) {
  if (!style || typeof style !== "object") return "";
  const entries = Object.entries(style).filter(([, value]) => value !== null && value !== undefined && value !== "");
  if (entries.length === 0) return "";
  const normalized = Object.fromEntries(entries);
  return JSON.stringify(normalized);
}

function normalizeAssetPath(asset) {
  const raw = String(asset || "").trim();
  if (!raw) return "";
  return raw.replace(/^\.\/asset/, "/assets");
}

function extractText(node) {
  if (Array.isArray(node?.text)) {
    const val = node.text
      .map((part) => String(part?.text || ""))
      .join("")
      .trim();
    if (val) return val;
  }
  return String(node?.name || "");
}

function toComposedName(name, fallbackId) {
  const raw = String(name || "").replace(/[^a-zA-Z0-9]+/g, "");
  const suffix = String(fallbackId || "").replace(/[^a-zA-Z0-9]+/g, "").slice(-6) || "Node";
  const head = raw ? raw[0].toUpperCase() + raw.slice(1) : "Component";
  return `Composed${head}${suffix}`;
}

function renderNode(node, options) {
  const {
    tailwindNodeMap,
    nodeToComposed,
    skipNodeIds,
    allowComposed,
    roleSet,
    composedSet,
    activeComposedStack
  } = options;
  const id = String(node?.id || "");
  const role = toIdentifier(node?.role || node?.roleFrozen || "Container");
  const children = getChildren(node);
  const mapped = tailwindNodeMap.get(id) || tailwindNodeMap.get(`name:${String(node?.name || "")}`) || {};
  const className = normalizeClassName(mapped.className || "");
  const styleLiteral = styleToLiteral(mapped.style);
  const composedName = nodeToComposed.get(id);
  if (
    allowComposed &&
    composedName &&
    !skipNodeIds.has(id) &&
    !activeComposedStack?.has(composedName)
  ) {
    composedSet.add(composedName);
    return `<${composedName} data={data} />`;
  }
  roleSet.add(role);
  const attrs = className ? ` className=${escapedLiteral(className)}` : "";
  const styleAttr = styleLiteral ? ` style={${styleLiteral}}` : "";
  const imageAsset = normalizeAssetPath(node?.ext?.asset);
  const isImageNode = role === "Image" && !!imageAsset;
  if (role === "Image") {
    if (!isImageNode) {
      roleSet.add("Container");
      return `<Container${attrs}${styleAttr} />`;
    }
    const key = `${slugify(node?.name || id)}Src`;
    return `<Image${attrs}${styleAttr} src={String(data?.[${escapedLiteral(key)}] ?? ${escapedLiteral(imageAsset)})} alt=${escapedLiteral(node?.name || "image")} />`;
  }
  if (role === "Text" || role === "Title" || role === "Description") {
    const key = `${slugify(node?.name || id)}Text`;
    const fallbackText = extractText(node);
    return `<${role}${attrs}${styleAttr} value={String(data?.[${escapedLiteral(key)}] ?? ${escapedLiteral(fallbackText)})} />`;
  }
  const fallbackText = extractText(node).trim();
  if (!children.length && fallbackText) {
    roleSet.add("Text");
    const key = `${slugify(node?.name || id)}Text`;
    return `<${role}${attrs}${styleAttr}><Text value={String(data?.[${escapedLiteral(key)}] ?? ${escapedLiteral(fallbackText)})} /></${role}>`;
  }
  const childCode = children.map((child) => renderNode(child, options)).join("");
  if (!childCode) return `<${role}${attrs}${styleAttr} />`;
  return `<${role}${attrs}${styleAttr}>${childCode}</${role}>`;
}

function emitComposedComponent(name, node, context) {
  const roleSet = new Set();
  const composedSet = new Set();
  const jsx = renderNode(node, {
    tailwindNodeMap: context.tailwindNodeMap,
    nodeToComposed: context.nodeToComposed,
    skipNodeIds: new Set([context.currentRootId]),
    allowComposed: true,
    roleSet,
    composedSet,
    activeComposedStack: new Set([name])
  });
  const imports = Array.from(roleSet)
    .sort()
    .map((role) => `import { ${role} } from "../base/${role}";`)
    .join("\n");
  const composedImports = Array.from(composedSet)
    .filter((item) => item !== name)
    .sort()
    .map((item) => `import { ${item} } from "./${item}";`)
    .join("\n");
  const importLines = [imports, composedImports].filter(Boolean).join("\n");
  return `${importLines}

type GeneratedPageProps = { data?: Record<string, unknown> };

export function ${name}({ data = {} }: GeneratedPageProps) {
  return (${jsx});
}
`;
}

function run() {
  const skeleton = readJson(SKELETON_FILE);
  const componentMap = readJson(COMPONENT_MAP_FILE);
  const tailwindSnapshot = readJson(TAILWIND_FILE);
  const roles = new Set(["Container"]);
  (skeleton.modules || []).forEach((mod) => walkRoles(mod, roles));
  const sortedRoles = Array.from(roles).sort();
  const tailwindNodeMap = collectTailwindNodeMap(tailwindSnapshot);
  const nodeIndex = collectNodeIndex(skeleton.modules || []);

  mkdirSync(OUT_COMPONENTS_DIR, { recursive: true });
  mkdirSync(OUT_COMPOSED_COMPONENTS_DIR, { recursive: true });
  sortedRoles.forEach((role) => {
    const code = emitComponent(role);
    writeFileSync(join(OUT_COMPONENTS_DIR, `${role}.tsx`), code, "utf8");
  });

  const components = Array.isArray(componentMap?.components) ? componentMap.components : [];
  const nodeToComposed = new Map();
  const composedDefs = [];
  components.forEach((item) => {
    const fromNodes = Array.isArray(item?.fromNodes) ? item.fromNodes : [];
    if (!fromNodes.length) return;
    const rootId = fromNodes[0];
    const rootNode = nodeIndex.get(rootId);
    if (!rootNode) return;
    const composedName = toComposedName(item.name || item.role, rootId);
    fromNodes.forEach((id) => nodeToComposed.set(String(id), composedName));
    composedDefs.push({ name: composedName, rootId, rootNode });
  });

  const composedFileSet = new Set(composedDefs.map((item) => `${item.name}.tsx`));
  readdirSync(OUT_COMPOSED_COMPONENTS_DIR)
    .filter((file) => file.endsWith(".tsx") && !composedFileSet.has(file))
    .forEach((file) => unlinkSync(join(OUT_COMPOSED_COMPONENTS_DIR, file)));
  const composedNodeIds = new Set(composedDefs.map((item) => item.rootId));
  composedDefs.forEach((item) => {
    const code = emitComposedComponent(item.name, item.rootNode, {
      tailwindNodeMap,
      nodeToComposed,
      composedNodeIds,
      currentRootId: item.rootId
    });
    writeFileSync(join(OUT_COMPOSED_COMPONENTS_DIR, `${item.name}.tsx`), code, "utf8");
  });

  const pageRoleSet = new Set();
  const pageComposedSet = new Set();
  const moduleJsx = (skeleton.modules || [])
    .map((mod) =>
      renderNode(mod, {
        tailwindNodeMap,
        nodeToComposed,
        skipNodeIds: new Set(),
        allowComposed: true,
        roleSet: pageRoleSet,
        composedSet: pageComposedSet,
        activeComposedStack: new Set()
      })
    )
    .join("");
  const baseImports = Array.from(pageRoleSet)
    .sort()
    .map((role) => `import { ${role} } from "./components/base/${role}";`)
    .join("\n");
  const composedImports = Array.from(pageComposedSet)
    .sort()
    .map((name) => `import { ${name} } from "./components/composed/${name}";`)
    .join("\n");
  const importLines = [baseImports, composedImports].filter(Boolean).join("\n");
  const pageCode = `${importLines}

export type GeneratedPageProps = { data?: Record<string, unknown> };

export default function Page({ data = {} }: GeneratedPageProps) {
  return (
    <main className="min-h-screen">
      ${moduleJsx}
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
        moduleCount: Array.isArray(skeleton.modules) ? skeleton.modules.length : 0,
        repeatedComponentCount: composedDefs.length
      },
      null,
      2
    )
  );
}

run();
