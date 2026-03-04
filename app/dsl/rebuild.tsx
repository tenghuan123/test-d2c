import type { CSSProperties } from "react";
import tokens from "../../dsl/registry/tokens.json";
import page1920 from "../../dsl/instances/pages/1920.json";
import module1440px3 from "../../dsl/instances/modules/1440px-3.json";
import module38102 from "../../dsl/instances/modules/3810-2.json";
import moduleHeader14401 from "../../dsl/instances/modules/header-1440-1.json";
import def1128 from "../../dsl/definitions/components/1128-80488c9a.json";
import def3615 from "../../dsl/definitions/components/3615-d37f156b.json";
import def3809 from "../../dsl/definitions/components/3809-36f2c6ca.json";
import def728 from "../../dsl/definitions/components/728-400a6c3c.json";
import defFooter from "../../dsl/definitions/components/footer-son-bottom-6355ddb9.json";
import defHeader from "../../dsl/definitions/components/header-1440-6642af4d.json";

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

type ModuleDefinition = {
  id: string;
  container?: DslNode;
  children: Array<{ type: "component"; ref: string }>;
};

const page = page1920 as { id: string; children: Array<{ type: "module"; ref: string }> };
const tokenStore = tokens as Record<string, unknown>;

const moduleMap: Record<string, ModuleDefinition> = {
  [moduleHeader14401.id]: moduleHeader14401 as ModuleDefinition,
  [module38102.id]: module38102 as ModuleDefinition,
  [module1440px3.id]: module1440px3 as ModuleDefinition,
};

const componentMap: Record<string, ComponentDefinition> = {
  [defHeader.id]: defHeader as ComponentDefinition,
  [def728.id]: def728 as ComponentDefinition,
  [def3615.id]: def3615 as ComponentDefinition,
  [def3809.id]: def3809 as ComponentDefinition,
  [def1128.id]: def1128 as ComponentDefinition,
  [defFooter.id]: defFooter as ComponentDefinition,
};

function resolveToken(ref: string) {
  if (!ref.startsWith("{") || !ref.endsWith("}")) return null;
  const path = ref.slice(1, -1).split(".");
  let current: unknown = tokenStore;
  for (const key of path) {
    if (!current || typeof current !== "object" || !(key in current)) return null;
    current = (current as Record<string, unknown>)[key];
  }
  return current;
}

function buildNodeStyle(node: DslNode): CSSProperties {
  const style: CSSProperties = {
    border: "1px solid #e5e7eb",
    borderRadius: 8,
    minHeight: 20,
    minWidth: 20,
    boxSizing: "border-box",
  };
  const layout = node.ext?.layoutStyle;
  const flex = node.ext?.flexContainerInfo;

  if (typeof layout?.width === "number" && layout.width > 0 && layout.width <= 1360) {
    style.width = layout.width;
    style.maxWidth = "100%";
  } else {
    style.width = "100%";
  }
  if (typeof layout?.height === "number" && layout.height > 0 && layout.height <= 800) {
    style.height = layout.height;
  }

  if (flex) {
    style.display = "flex";
    style.flexDirection = flex.flexDirection ?? "row";
    style.justifyContent = flex.justifyContent;
    style.alignItems = flex.alignItems;
    style.gap = flex.gap;
    style.padding = flex.padding;
  }

  for (const ref of node.styleRefs ?? []) {
    const value = resolveToken(ref);
    if (typeof value !== "string") continue;
    if (value.startsWith("linear-gradient")) {
      style.backgroundImage = value;
    } else if (value.startsWith("#") || value.startsWith("rgb")) {
      style.background = value;
    }
  }

  return style;
}

function RebuildNode({ node }: { node: DslNode }) {
  const children = node.children ?? [];
  const isText = node.nodeType === "TEXT";
  return (
    <div style={buildNodeStyle(node)} className="p-1.5">
      {isText ? (
        <span className="text-xs text-gray-700">{node.name}</span>
      ) : (
        <div className="mb-1 text-[10px] text-gray-500">
          {node.nodeType} · {node.name}
        </div>
      )}
      {children.length > 0 && (
        <div className="flex flex-col gap-1">
          {children.map((child, idx) => (
            <RebuildNode key={`${child.name ?? "node"}-${idx}`} node={child} />
          ))}
        </div>
      )}
    </div>
  );
}

function ComponentRebuild({ componentId }: { componentId: string }) {
  const definition = componentMap[componentId];
  if (!definition) return <div className="border border-red-200 bg-red-50 p-2">missing component: {componentId}</div>;
  return <RebuildNode node={definition.structure} />;
}

export function DslRebuildPage() {
  return (
    <main className="mx-auto max-w-[1440px] space-y-4 p-4">
      <h1 className="text-lg font-semibold">DSL 页面还原预览（当前能力）</h1>
      <div className="space-y-4">
        {page.children.map((item) => {
          const mod = moduleMap[item.ref];
          if (!mod) return <div key={item.ref}>missing module: {item.ref}</div>;
          return (
            <section key={mod.id} className="space-y-2" style={mod.container ? buildNodeStyle(mod.container) : undefined}>
              {mod.container && (
                <div className="px-2 pt-2 text-[10px] text-gray-500">
                  {mod.container.nodeType} · {mod.container.name}
                </div>
              )}
              {mod.children.map((child) => (
                <ComponentRebuild key={child.ref} componentId={child.ref} />
              ))}
            </section>
          );
        })}
      </div>
    </main>
  );
}
