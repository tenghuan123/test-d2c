import dslIndex from "../../dsl/index.json";
import componentRegistry from "../../dsl/registry/components.json";
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

type DslNode = {
  nodeType?: string;
  name?: string;
  styleRefs?: string[];
  children?: DslNode[];
};

type ComponentDefinition = {
  id: string;
  structure: DslNode;
};

type ModuleItem = {
  type: "component";
  ref: string;
  props?: Record<string, unknown>;
};

type ModuleDefinition = {
  id: string;
  children: ModuleItem[];
};

type PageItem = {
  type: "module";
  ref: string;
};

type PageDefinition = {
  id: string;
  route?: string;
  children: PageItem[];
};

const pageDsl = page1920 as PageDefinition;
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

const tokenStore = tokens as Record<string, unknown>;
const registry = componentRegistry as Record<
  string,
  { id: string; file: string; usageCount: number }
>;

function resolveToken(ref: string) {
  if (!ref.startsWith("{") || !ref.endsWith("}")) return null;
  const keyPath = ref.slice(1, -1).split(".");
  let current: unknown = tokenStore;
  for (const key of keyPath) {
    if (!current || typeof current !== "object" || !(key in current)) return null;
    current = (current as Record<string, unknown>)[key];
  }
  return current;
}

function NodeTree({ node, depth = 0 }: { node: DslNode; depth?: number }) {
  const children = node.children ?? [];
  const maxDepth = 2;
  return (
    <div className="text-xs text-gray-700">
      <div className="flex items-center gap-2">
        <span className="rounded bg-gray-100 px-2 py-0.5">{node.nodeType ?? "UNKNOWN"}</span>
        <span className="truncate">{node.name ?? "unnamed"}</span>
      </div>
      {depth < maxDepth && children.length > 0 && (
        <div className="mt-2 space-y-1 border-l border-gray-200 pl-3">
          {children.slice(0, 4).map((child, idx) => (
            <NodeTree key={`${child.name ?? "node"}-${idx}`} node={child} depth={depth + 1} />
          ))}
          {children.length > 4 && <div className="text-gray-400">...{children.length - 4} more</div>}
        </div>
      )}
    </div>
  );
}

function ComponentCard({ componentId }: { componentId: string }) {
  const definition = componentMap[componentId];
  if (!definition) {
    return <div className="rounded border border-red-200 bg-red-50 p-3 text-sm">缺少组件: {componentId}</div>;
  }

  const styleRefs = definition.structure.styleRefs ?? [];
  return (
    <article className="space-y-2 rounded-lg border border-gray-200 bg-white p-4">
      <header className="flex items-center justify-between gap-3">
        <h4 className="text-sm font-semibold text-gray-900">{definition.id}</h4>
        <span className="text-xs text-gray-500">usage: {registry[componentId]?.usageCount ?? 0}</span>
      </header>
      <div className="text-xs text-gray-500">{registry[componentId]?.file ?? "-"}</div>
      {styleRefs.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {styleRefs.map((ref) => (
            <span key={ref} className="rounded bg-blue-50 px-2 py-0.5 text-xs text-blue-700">
              {ref} = {String(resolveToken(ref) ?? "N/A")}
            </span>
          ))}
        </div>
      )}
      <NodeTree node={definition.structure} />
    </article>
  );
}

function ModuleSection({ moduleId }: { moduleId: string }) {
  const module = moduleMap[moduleId];
  if (!module) {
    return <section className="rounded border border-red-200 bg-red-50 p-4">缺少模块: {moduleId}</section>;
  }

  return (
    <section className="space-y-3 rounded-xl border border-gray-300 bg-gray-50 p-4">
      <h3 className="text-base font-semibold text-gray-900">Module: {module.id}</h3>
      <div className="grid gap-3 md:grid-cols-2">
        {module.children.map((item) => (
          <ComponentCard key={item.ref} componentId={item.ref} />
        ))}
      </div>
    </section>
  );
}

export function DslPageDemo() {
  return (
    <main className="mx-auto max-w-6xl space-y-4 p-6">
      <header className="space-y-1">
        <h1 className="text-xl font-bold text-gray-900">DSL Demo</h1>
        <p className="text-sm text-gray-600">
          page: {pageDsl.id} | route: {pageDsl.route} | dslVersion: {dslIndex.dslVersion}
        </p>
      </header>
      {pageDsl.children.map((item) => (
        <ModuleSection key={item.ref} moduleId={item.ref} />
      ))}
    </main>
  );
}
