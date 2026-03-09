import dslIndex from "../../dsl/index.json";
import componentRegistry from "../../dsl/registry/components.json";
import tokens from "../../dsl/registry/tokens.json";
import structureSnapshot from "../../dsl/snapshots/structure.latest.json";

type DslNode = {
  nodeType?: string;
  name?: string;
  styleRefs?: string[];
  children?: DslNode[];
};

type ComponentDefinition = {
  id: string;
  signature?: string;
};

type PageDefinition = {
  id: string;
};

type Snapshot = {
  page: PageDefinition;
  modules: Array<{ id: string }>;
  components: ComponentDefinition[];
};

const snapshot = structureSnapshot as Snapshot;
const pageDsl = snapshot.page;
const moduleList = snapshot.modules || [];
const componentList = snapshot.components || [];

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

export function DslPageDemo() {
  const colorTokens = ((tokenStore.color as Record<string, string>) || {});
  const topColorEntries = Object.entries(colorTokens).slice(0, 6);
  return (
    <main className="mx-auto max-w-6xl space-y-4 p-6">
      <header className="space-y-1">
        <h1 className="text-xl font-bold text-gray-900">DSL Demo</h1>
        <p className="text-sm text-gray-600">
          page: {pageDsl.id} | modules: {moduleList.length} | components: {componentList.length} | dslVersion:{" "}
          {dslIndex.dslVersion}
        </p>
      </header>
      <section className="rounded-xl border border-gray-300 bg-gray-50 p-4">
        <h3 className="mb-2 text-base font-semibold text-gray-900">Modules</h3>
        <div className="flex flex-wrap gap-2">
          {moduleList.map((item) => (
            <span key={item.id} className="rounded bg-white px-2 py-1 text-xs">
              {item.id}
            </span>
          ))}
        </div>
      </section>
      <section className="rounded-xl border border-gray-300 bg-gray-50 p-4">
        <h3 className="mb-2 text-base font-semibold text-gray-900">Top Components</h3>
        <div className="space-y-1 text-xs text-gray-700">
          {componentList.slice(0, 8).map((item) => (
            <div key={item.id} className="flex items-center justify-between gap-3 rounded bg-white px-2 py-1">
              <span>{item.id}</span>
              <span className="text-gray-500">usage: {registry[item.id]?.usageCount ?? 0}</span>
            </div>
          ))}
        </div>
      </section>
      {topColorEntries.length > 0 && (
        <section className="rounded-xl border border-gray-300 bg-gray-50 p-4">
          <h3 className="mb-2 text-base font-semibold text-gray-900">Top Color Tokens</h3>
          <div className="flex flex-wrap gap-2">
            {topColorEntries.map(([key, value]) => (
              <span key={key} className="rounded bg-white px-2 py-1 text-xs">
                {`{color.${key}}`} = {String(resolveToken(`{color.${key}}`) ?? value)}
              </span>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
