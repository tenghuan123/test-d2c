function isObject(value) {
  return !!value && typeof value === "object";
}

function resolveTokenRef(ref, tokenStore) {
  if (typeof ref !== "string" || !ref.startsWith("{") || !ref.endsWith("}")) return null;
  const path = ref.slice(1, -1).split(".");
  let current = tokenStore;
  for (const key of path) {
    if (!isObject(current) || !(key in current)) return null;
    current = current[key];
  }
  return current;
}

function pxToTailwindSpace(value) {
  const num = Number(value);
  if (!Number.isFinite(num)) return null;
  const quarter = num / 4;
  if (!Number.isInteger(quarter)) return null;
  return String(quarter).replace(/\.0$/, "");
}

function mapBoxSpacing(prefix, raw) {
  if (typeof raw !== "string" || raw.trim() === "") return [];
  const parts = raw.trim().split(/\s+/);
  if (parts.length === 0) return [];

  if (parts.length === 1) {
    const v = pxToTailwindSpace(parts[0].replace("px", ""));
    if (!v) return [];
    return [`${prefix}-${v}`];
  }

  if (parts.length === 2) {
    const v = pxToTailwindSpace(parts[0].replace("px", ""));
    const h = pxToTailwindSpace(parts[1].replace("px", ""));
    if (!v || !h) return [];
    if (prefix === "gap") return [`gap-y-${v}`, `gap-x-${h}`];
    return [`${prefix}y-${v}`, `${prefix}x-${h}`];
  }

  return [];
}

function mapJustify(value) {
  const map = {
    "flex-start": "justify-start",
    center: "justify-center",
    "flex-end": "justify-end",
    "space-between": "justify-between",
    "space-around": "justify-around",
    "space-evenly": "justify-evenly"
  };
  return map[value] || null;
}

function mapItems(value) {
  const map = {
    "flex-start": "items-start",
    center: "items-center",
    "flex-end": "items-end",
    stretch: "items-stretch",
    baseline: "items-baseline"
  };
  return map[value] || null;
}

function mapDirection(value) {
  const map = {
    row: "flex-row",
    column: "flex-col",
    "row-reverse": "flex-row-reverse",
    "column-reverse": "flex-col-reverse"
  };
  return map[value] || null;
}

function normalizeClasses(classes) {
  return Array.from(new Set(classes.filter(Boolean))).sort().join(" ");
}

export function mapDslNodeToTailwind(node, tokenStore) {
  const classes = [];
  const style = {};
  const layout = node?.ext?.layoutStyle;
  const flex = node?.ext?.flexContainerInfo;

  if (typeof layout?.width === "number" && layout.width > 0) {
    classes.push(`w-[${layout.width}px]`);
    style.maxWidth = "100%";
  } else {
    style.width = "100%";
  }

  if (typeof layout?.height === "number" && layout.height > 0) {
    classes.push(`h-[${layout.height}px]`);
  }

  if (flex) {
    classes.push("flex");
    const direction = mapDirection(flex.flexDirection || "row");
    if (direction) classes.push(direction);

    const justify = mapJustify(flex.justifyContent);
    if (justify) classes.push(justify);
    else if (flex.justifyContent) style.justifyContent = flex.justifyContent;

    const items = mapItems(flex.alignItems);
    if (items) classes.push(items);
    else if (flex.alignItems) style.alignItems = flex.alignItems;

    const gapClasses = mapBoxSpacing("gap", flex.gap);
    if (gapClasses.length > 0) classes.push(...gapClasses);
    else if (flex.gap) style.gap = flex.gap;

    const paddingClasses = mapBoxSpacing("p", flex.padding);
    if (paddingClasses.length > 0) classes.push(...paddingClasses);
    else if (flex.padding) style.padding = flex.padding;
  }

  for (const ref of node?.styleRefs || []) {
    const value = resolveTokenRef(ref, tokenStore);
    if (typeof value !== "string") continue;
    if (value.startsWith("linear-gradient")) {
      style.backgroundImage = value;
      continue;
    }
    if (value.startsWith("#")) {
      classes.push(`bg-[${value}]`);
    } else if (value.startsWith("rgb") || value.startsWith("hsl")) {
      style.background = value;
    }
  }

  return {
    className: normalizeClasses(classes),
    style
  };
}

export function mapDslTreeToTailwind(node, tokenStore) {
  const mapped = mapDslNodeToTailwind(node, tokenStore);
  return {
    nodeType: node?.nodeType || "UNKNOWN",
    name: node?.name || "",
    className: mapped.className,
    style: mapped.style,
    children: Array.isArray(node?.children) ? node.children.map((child) => mapDslTreeToTailwind(child, tokenStore)) : []
  };
}
