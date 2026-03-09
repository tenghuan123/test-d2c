import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route(".well-known/appspecific/com.chrome.devtools.json", "routes/chrome-devtools.ts"),
    route("rebuild", "routes/rebuild.tsx"),
    route("generated", "routes/generated.tsx"),
    route("test", "routes/test.tsx"),
    route("myzhuye", "routes/myzhuye.tsx")
] satisfies RouteConfig;
