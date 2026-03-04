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

function hasClassToken(className, token) {
  return String(className || "")
    .split(/\s+/)
    .filter(Boolean)
    .includes(token);
}

function parseLineHeight(value, fontSizePx) {
  if (value == null || value === "auto") return null;
  const num = Number(String(value).replace("px", ""));
  if (!Number.isFinite(num)) return null;
  if (fontSizePx && num % fontSizePx === 0) {
    const ratio = num / fontSizePx;
    if (Number.isFinite(ratio)) return `${ratio}`;
  }
  return `${num}px`;
}

function parseLetterSpacing(value) {
  if (value == null || value === "auto") return null;
  const num = Number(String(value).replace("px", ""));
  if (!Number.isFinite(num)) return null;
  return `${num}px`;
}

function mapFontWeight(style) {
  const s = String(style || "").toLowerCase();
  if (s.includes("bold") || s.includes("中黑") || s.includes("semibold")) return 600;
  if (s.includes("medium")) return 500;
  if (s.includes("regular") || s.includes("常规")) return 400;
  return null;
}

function mapFontWeightClass(weight) {
  if (weight === 400) return "font-normal";
  if (weight === 500) return "font-medium";
  if (weight === 600) return "font-semibold";
  if (weight === 700) return "font-bold";
  return null;
}

function applyTextStyleToken(classes, style, value) {
  if (!isObject(value)) return;
  const size = Number(value.size);
  if (Number.isFinite(size)) classes.push(`text-[${size}px]`);
  if (value.family) style.fontFamily = value.family;
  const lineHeight = parseLineHeight(value.lineHeight, size);
  if (lineHeight) classes.push(`leading-[${lineHeight}]`);
  const letterSpacing = parseLetterSpacing(value.letterSpacing);
  if (letterSpacing) classes.push(`tracking-[${letterSpacing}]`);
  const weight = mapFontWeight(value.style);
  if (weight) {
    const w = mapFontWeightClass(weight);
    if (w) classes.push(w);
    else style.fontWeight = weight;
  }
}

export function mapDslNodeToTailwind(node, tokenStore, options = {}) {
  const classes = [];
  const style = {};
  const errors = [];
  const enablePosition = options.enablePosition === true;
  const parentIsRelative = options.parentIsRelative === true;
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
  if (enablePosition && (Number.isFinite(layout?.relativeX) || Number.isFinite(layout?.relativeY))) {
    if (parentIsRelative) {
      classes.push("absolute");
      if (Number.isFinite(layout?.relativeX)) classes.push(`left-[${layout.relativeX}px]`);
      if (Number.isFinite(layout?.relativeY)) classes.push(`top-[${layout.relativeY}px]`);
    } else {
      errors.push("ABSOLUTE_REQUIRES_PARENT_RELATIVE");
    }
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
    const refPath = ref.startsWith("{") && ref.endsWith("}") ? ref.slice(1, -1) : "";
    const isTextStyleRef = refPath.startsWith("textStyle.");
    const isColorRef = refPath.startsWith("color.");
    const value = resolveTokenRef(ref, tokenStore);
    if (typeof value === "string") {
      if (value.startsWith("linear-gradient")) {
        style.backgroundImage = value;
        continue;
      }
      if (value.startsWith("#")) {
        if (node?.nodeType === "TEXT" && isColorRef) classes.push(`text-[${value}]`);
        else classes.push(`bg-[${value}]`);
      } else if (value.startsWith("rgb") || value.startsWith("hsl")) {
        if (node?.nodeType === "TEXT" && isColorRef) style.color = value;
        else style.background = value;
      }
      continue;
    }
    if (isTextStyleRef) applyTextStyleToken(classes, style, value);
  }

  if (node?.nodeType === "TEXT") {
    if (node?.ext?.textAlign) {
      const alignMap = { left: "text-left", center: "text-center", right: "text-right", justify: "text-justify" };
      const alignClass = alignMap[node.ext.textAlign];
      if (alignClass) classes.push(alignClass);
      else style.textAlign = node.ext.textAlign;
    }
    if (node?.ext?.textMode === "single-line") classes.push("whitespace-nowrap");
  }

  return {
    className: normalizeClasses(classes),
    style,
    errors
  };
}

export function mapDslTreeToTailwind(node, tokenStore, options = {}) {
  function visit(current, parentIsRelative) {
    const mapped = mapDslNodeToTailwind(current, tokenStore, {
      parentIsRelative,
      enablePosition: options.enablePosition === true
    });
    const currentIsRelative = hasClassToken(mapped.className, "relative");
    return {
      nodeType: current?.nodeType || "UNKNOWN",
      name: current?.name || "",
      ref: current?.nodeType === "COMPONENT_REF" ? current?.ref || null : undefined,
      className: mapped.className,
      style: mapped.style,
      errors: mapped.errors,
      children: Array.isArray(current?.children)
        ? current.children.map((child) => visit(child, currentIsRelative))
        : []
    };
  }
  return visit(node, false);
}
