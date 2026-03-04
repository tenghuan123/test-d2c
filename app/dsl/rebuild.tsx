import type { CSSProperties } from "react";
import tokens from "../../dsl/registry/tokens.json";
import textStyles from "../../dsl/registry/text-styles.json";
import { mapDslNodeToTailwind } from "../../dsl/tailwind-mapper.js";

type LayoutStyle = {
  width?: number;
  height?: number;
};

type FlexStyle = {
  flexDirection?: CSSProperties["flexDirection"];
  justifyContent?: CSSProperties["justifyContent"];
  alignItems?: CSSProperties["alignItems"];
  gap?: string;
  padding?: string;
};

type DslNode = {
  nodeType?: string;
  name?: string;
  ref?: string;
  styleRefs?: string[];
  ext?: {
    layoutStyle?: LayoutStyle;
    flexContainerInfo?: FlexStyle | null;
  };
  children?: DslNode[];
};

type ComponentDefinition = {
  id: string;
  structure: DslNode;
};

type PageDefinition = {
  id: string;
  route?: string;
  children: Array<{ type: "module"; ref: string }>;
};

type ModuleDefinition = {
  id: string;
  container?: DslNode;
  children: Array<{ type: "component"; ref: string }>;
};

const tokenStore = { ...(tokens as Record<string, unknown>), textStyle: textStyles } as Record<string, unknown>;
const ENABLE_POSITION = import.meta.env.VITE_DSL_ENABLE_POSITION === "1";

function fromJsonModule<T>(value: unknown): T {
  if (value && typeof value === "object" && "default" in value) {
    return (value as { default: T }).default;
  }
  return value as T;
}

const pageFiles = import.meta.glob("../../dsl/instances/pages/*.json", { eager: true });
const moduleFiles = import.meta.glob("../../dsl/instances/modules/*.json", { eager: true });
const componentFiles = import.meta.glob("../../dsl/definitions/components/*.json", { eager: true });

const pages = Object.values(pageFiles).map((m) => fromJsonModule<PageDefinition>(m));
const page = pages.find((p) => p.route === "/") ?? pages[0] ?? { id: "empty", children: [] };

const moduleMap: Record<string, ModuleDefinition> = Object.fromEntries(
  Object.values(moduleFiles)
    .map((m) => fromJsonModule<ModuleDefinition>(m))
    .map((m) => [m.id, m])
);

const componentMap: Record<string, ComponentDefinition> = Object.fromEntries(
  Object.values(componentFiles)
    .map((m) => fromJsonModule<ComponentDefinition>(m))
    .map((c) => [c.id, c])
);

function hasRelativeClass(className: string) {
  return className.split(/\s+/).filter(Boolean).includes("relative");
}

function componentClassName(componentId: string) {
  return `dsl-comp-${componentId.replace(/[^a-zA-Z0-9_-]/g, "-")}`;
}

function RebuildNode({
  node,
  parentIsRelative = false,
  rootClassName,
  dataComponentId
}: {
  node: DslNode;
  parentIsRelative?: boolean;
  rootClassName?: string;
  dataComponentId?: string;
}) {
  if (node.nodeType === "COMPONENT_REF" && node.ref) {
    return <ComponentRebuild componentId={node.ref} parentIsRelative={parentIsRelative} />;
  }
  const children = node.children ?? [];
  const isText = node.nodeType === "TEXT";
  const mapped = mapDslNodeToTailwind(node, tokenStore, { parentIsRelative, enablePosition: ENABLE_POSITION });
  const currentIsRelative = hasRelativeClass(mapped.className);
  const hasVisualLeaf = !isText && children.length === 0;
  return (
    <div
      className={`${rootClassName ?? ""} ${mapped.className}`.trim()}
      style={mapped.style as CSSProperties}
      data-component-id={dataComponentId}
    >
      {isText ? (
        <span className="text-sm text-gray-700">{node.name}</span>
      ) : null}
      {hasVisualLeaf ? (
        <div className="h-full w-full rounded-sm border border-gray-200/70" />
      ) : null}
      {mapped.errors?.includes("ABSOLUTE_REQUIRES_PARENT_RELATIVE") ? (
        <div className="text-[10px] text-red-600">position error: parent must be relative</div>
      ) : null}
      {children.length > 0
        ? children.map((child, idx) => (
            <RebuildNode key={`${child.name ?? "node"}-${idx}`} node={child} parentIsRelative={currentIsRelative} />
          ))
        : null}
    </div>
  );
}

function ModuleRebuild({ moduleId }: { moduleId: string }) {
  const mod = moduleMap[moduleId];
  if (!mod) return <div>missing module: {moduleId}</div>;
  const mapped = mod.container
    ? mapDslNodeToTailwind(mod.container, tokenStore, {
        parentIsRelative: false,
        enablePosition: ENABLE_POSITION
      })
    : null;
  const moduleIsRelative = hasRelativeClass(mapped?.className || "");
  return (
    <section className={mapped?.className} style={mapped ? (mapped.style as CSSProperties) : undefined}>
      {mod.children.map((child) => (
        <ComponentRebuild key={child.ref} componentId={child.ref} parentIsRelative={moduleIsRelative} />
      ))}
    </section>
  );
}

function ComponentRebuild({ componentId, parentIsRelative = false }: { componentId: string; parentIsRelative?: boolean }) {
  const definition = componentMap[componentId];
  if (!definition) return <div className="border border-red-200 bg-red-50 p-2">missing component: {componentId}</div>;
  const compClass = componentClassName(componentId);
  return (
    <RebuildNode
      node={definition.structure}
      parentIsRelative={parentIsRelative}
      rootClassName={compClass}
      dataComponentId={componentId}
    />
  );
}

export function DslRebuildPage() {
  return (
    <main className="mx-auto min-h-screen max-w-[1920px] bg-[#f9f9f9]">
      {page.children.map((item) => (
        <ModuleRebuild key={item.ref} moduleId={item.ref} />
      ))}
    </main>
  );
}
