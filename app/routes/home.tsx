import type { Route } from "./+types/home";
import { DslPageDemo } from "../dsl/demo";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "DSL Demo" },
    { name: "description", content: "DSL driven page demo" },
  ];
}

export default function Home() {
  return <DslPageDemo />;
}
