import type { Route } from "./+types/rebuild";
import { DslRebuildPage } from "../dsl/rebuild";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "DSL Rebuild Preview" },
    { name: "description", content: "Rebuild page from split DSL" },
  ];
}

export default function RebuildRoute() {
  return <DslRebuildPage />;
}
