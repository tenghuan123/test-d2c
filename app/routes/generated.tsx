import type { Route } from "./+types/home";
import GPageDemo from "../generated/page";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "generated page Demo" },
    { name: "description", content: "generated page demo" },
  ];
}

export default function Home() {
  return <GPageDemo />;
}
