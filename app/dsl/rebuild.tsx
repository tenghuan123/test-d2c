import type { CSSProperties } from "react";
import tokens from "../../dsl/registry/tokens.json";
import { mapDslNodeToTailwind } from "../../dsl/tailwind-mapper.js";
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

function RebuildNode({ node }: { node: DslNode }) {
  const children = node.children ?? [];
  const isText = node.nodeType === "TEXT";
  const mapped = mapDslNodeToTailwind(node, tokenStore);
  const hasVisualLeaf = !isText && children.length === 0;
  return (
    <div className={mapped.className} style={mapped.style as CSSProperties}>
      {isText ? (
        <span className="text-sm text-gray-700">{node.name}</span>
      ) : null}
      {hasVisualLeaf ? (
        <div className="h-full w-full rounded-sm border border-gray-200/70" />
      ) : null}
      {children.length > 0
        ? children.map((child, idx) => <RebuildNode key={`${child.name ?? "node"}-${idx}`} node={child} />)
        : null}
    </div>
  );
}

function ModuleRebuild({ moduleId }: { moduleId: string }) {
  const mod = moduleMap[moduleId];
  if (!mod) return <div>missing module: {moduleId}</div>;
  const mapped = mod.container ? mapDslNodeToTailwind(mod.container, tokenStore) : null;
  return (
    <section className={mapped?.className} style={mapped ? (mapped.style as CSSProperties) : undefined}>
      {mod.children.map((child) => (
        <ComponentRebuild key={child.ref} componentId={child.ref} />
      ))}
    </section>
  );
}

function ComponentRebuild({ componentId }: { componentId: string }) {
  const definition = componentMap[componentId];
  if (!definition) return <div className="border border-red-200 bg-red-50 p-2">missing component: {componentId}</div>;
  return <RebuildNode node={definition.structure} />;
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
