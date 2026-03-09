import { createHash } from "node:crypto";

function hash(input) {
  return createHash("sha1").update(input).digest("hex");
}

function shortHash(input) {
  return hash(input).slice(0, 10);
}

function pad2(value) {
  const num = Number.isFinite(Number(value)) ? Number(value) : 0;
  return Math.round(num * 100) / 100;
}

function toPx(value) {
  if (value == null) return undefined;
  if (typeof value === "string") return value;
  if (typeof value === "number") return `${pad2(value)}px`;
  return undefined;
}

function normalizePadding(padding = {}) {
  const top = toPx(padding.top ?? 0) || "0px";
  const right = toPx(padding.right ?? 0) || "0px";
  const bottom = toPx(padding.bottom ?? 0) || "0px";
  const left = toPx(padding.left ?? 0) || "0px";
  return `${top} ${right} ${bottom} ${left}`;
}

function normalizeJustify(value) {
  const raw = String(value || "").trim();
  if (!raw) return undefined;
  const map = {
    start: "flex-start",
    end: "flex-end"
  };
  return map[raw] || raw;
}

function normalizeAlign(value) {
  const raw = String(value || "").trim();
  if (!raw) return undefined;
  const map = {
    start: "flex-start",
    end: "flex-end"
  };
  return map[raw] || raw;
}

function toColorString(input) {
  if (typeof input === "string") return input;
  if (!input || typeof input !== "object") return null;
  if (typeof input.color === "string") return input.color;
  return null;
}

function normalizeFontStyle(text) {
  const hasTextStyle =
    text &&
    (text.fontFamily != null ||
      text.fontSize != null ||
      text.fontWeight != null ||
      text.lineHeight != null ||
      text.letterSpacing != null);
  if (!hasTextStyle) return null;
  return {
    family: text.fontFamily || "system-ui",
    size: Number.isFinite(Number(text.fontSize)) ? Number(text.fontSize) : 14,
    style: text.fontWeight != null ? String(text.fontWeight) : "400",
    decoration: "none",
    case: "none",
    lineHeight: text.lineHeight != null ? String(text.lineHeight) : "normal",
    letterSpacing: text.letterSpacing != null ? String(text.letterSpacing) : "auto"
  };
}

function createStyleBuilder() {
  const styles = {};
  const paintKeys = new Map();
  const fontKeys = new Map();
  const effectKeys = new Map();

  function ensurePaint(value, tokenHint) {
    if (value == null) return null;
    const normalized = typeof value === "object" ? JSON.stringify(value) : String(value);
    if (paintKeys.has(normalized)) return paintKeys.get(normalized);
    const id = `paint_drawer_${shortHash(`paint:${normalized}`)}`;
    styles[id] = { value: [value] };
    if (tokenHint) styles[id].token = tokenHint;
    paintKeys.set(normalized, id);
    return id;
  }

  function ensureFont(value, tokenHint) {
    if (!value || typeof value !== "object") return null;
    const normalized = JSON.stringify(value);
    if (fontKeys.has(normalized)) return fontKeys.get(normalized);
    const id = `font_drawer_${shortHash(`font:${normalized}`)}`;
    styles[id] = { value };
    if (tokenHint) styles[id].token = tokenHint;
    fontKeys.set(normalized, id);
    return id;
  }

  function ensureEffect(value, tokenHint) {
    if (!Array.isArray(value) || value.length === 0) return null;
    const normalized = JSON.stringify(value);
    if (effectKeys.has(normalized)) return effectKeys.get(normalized);
    const id = `effect_drawer_${shortHash(`effect:${normalized}`)}`;
    styles[id] = { value };
    if (tokenHint) styles[id].token = tokenHint;
    effectKeys.set(normalized, id);
    return id;
  }

  return {
    styles,
    ensurePaint,
    ensureFont,
    ensureEffect
  };
}

function mapLayout(layout) {
  if (!layout || typeof layout !== "object") return {};
  const layoutStyle = {};
  if (layout.width != null) layoutStyle.width = Number(layout.width);
  if (layout.height != null) layoutStyle.height = Number(layout.height);
  if (layout.x != null) layoutStyle.relativeX = Number(layout.x);
  if (layout.y != null) layoutStyle.relativeY = Number(layout.y);

  let flexContainerInfo = null;
  if (String(layout.mode || "").toLowerCase() === "flex") {
    flexContainerInfo = {
      flexDirection: layout.direction || "row",
      justifyContent: normalizeJustify(layout.justify),
      alignItems: normalizeAlign(layout.align),
      gap: toPx(layout.gap ?? 0) || "0px",
      padding: normalizePadding(layout.padding || {}),
      mainSizing: "auto",
      crossSizing: "auto"
    };
  }
  return {
    layoutStyle: Object.keys(layoutStyle).length > 0 ? layoutStyle : undefined,
    flexContainerInfo
  };
}

function convertDrawerNode(node, nodeMap, styleBuilder, parentId, index) {
  if (!node || typeof node !== "object") return null;
  const nodeId = String(node.id || `${parentId || "n"}-${index}`);
  const normalized = {
    type: node.type || "UNKNOWN",
    id: nodeId,
    name: node.name || ""
  };

  const { layoutStyle, flexContainerInfo } = mapLayout(node.layout);
  if (layoutStyle) normalized.layoutStyle = layoutStyle;
  if (flexContainerInfo) normalized.flexContainerInfo = flexContainerInfo;

  if (node.style && typeof node.style === "object") {
    const bg = toColorString(node.style.background);
    if (bg) {
      const paintId = styleBuilder.ensurePaint(bg);
      if (paintId) normalized.fill = paintId;
    }
    if (node.style.border && typeof node.style.border === "object") {
      const borderColor = toColorString(node.style.border.color);
      if (borderColor) {
        const paintId = styleBuilder.ensurePaint(borderColor);
        if (paintId) normalized.stroke = paintId;
      }
    }
    if (node.style.opacity != null) normalized.opacity = Number(node.style.opacity);
    if (node.style.borderRadius != null) normalized.borderRadius = Number(node.style.borderRadius);
    const effect = Array.isArray(node.style.effects) ? node.style.effects : [];
    if (effect.length > 0) {
      const effectId = styleBuilder.ensureEffect(effect);
      if (effectId) normalized.effect = effectId;
    }
  }

  if (node.type === "TEXT" && node.text && typeof node.text === "object") {
    const textValue = String(node.text.value || "");
    const fontValue = normalizeFontStyle(node.text);
    const fontId = styleBuilder.ensureFont(fontValue);
    normalized.text = [{ text: textValue, font: fontId }];
    const textColor = toColorString(node.text.color);
    if (textColor) {
      const paintId = styleBuilder.ensurePaint(textColor);
      normalized.textColor = [{ start: 0, end: textValue.length, color: paintId }];
    }
    if (node.text.align) normalized.textAlign = node.text.align;
    normalized.textMode = "single-line";
  }

  if (node.component && typeof node.component === "object") {
    if (node.component.componentId) normalized.componentId = String(node.component.componentId);
    const variant = node.component.variant && typeof node.component.variant === "object" ? node.component.variant : {};
    normalized.componentInfo = { properties: variant };
  }

  if (typeof node.asset === "string" && node.asset) {
    normalized.asset = node.asset;
  }

  const children = Array.isArray(node.children) ? node.children : [];
  if (children.length > 0) {
    normalized.children = [];
    children.forEach((child, idx) => {
      const converted = convertDrawerNode(child, nodeMap, styleBuilder, nodeId, idx);
      if (!converted) return;
      nodeMap[converted.id] = converted;
      normalized.children.push(converted.id);
    });
  }

  return normalized;
}

export function isMastergoInput(input) {
  return Boolean(input?.dsl && input.dsl.nodes && typeof input.dsl.nodes === "object");
}

export function isDrawerInput(input) {
  return Boolean(input && typeof input === "object" && Array.isArray(input.children) && !input.dsl);
}

export function normalizeDslInput(rawInput, sourcePath = "mastergo-dsl.json") {
  if (isMastergoInput(rawInput)) {
    return {
      sourceType: "mastergo",
      sourcePath,
      canonical: rawInput
    };
  }
  if (!isDrawerInput(rawInput)) {
    throw new Error(`unsupported dsl input format: ${sourcePath}`);
  }

  const styleBuilder = createStyleBuilder();
  const nodeMap = {};
  const rootId = "0";
  const rootNode = {
    type: rawInput.type || "FRAME",
    id: rootId,
    name: rawInput.name || "home",
    children: []
  };
  const { layoutStyle, flexContainerInfo } = mapLayout(rawInput.layout);
  if (layoutStyle) rootNode.layoutStyle = layoutStyle;
  if (flexContainerInfo) rootNode.flexContainerInfo = flexContainerInfo;

  (rawInput.children || []).forEach((child, idx) => {
    const converted = convertDrawerNode(child, nodeMap, styleBuilder, rootId, idx);
    if (!converted) return;
    nodeMap[converted.id] = converted;
    rootNode.children.push(converted.id);
  });
  nodeMap[rootId] = rootNode;

  return {
    sourceType: "drawer",
    sourcePath,
    canonical: {
      dsl: {
        nodes: nodeMap,
        styles: styleBuilder.styles,
        components: {}
      }
    }
  };
}
