export type DslNode = {
  nodeType?: string;
  name?: string;
  styleRefs?: string[];
  text?: Array<{ text?: string; font?: string | null }>;
  ext?: {
    layoutStyle?: {
      width?: number;
      height?: number;
    };
    textAlign?: string | null;
    textMode?: string | null;
    flexContainerInfo?: {
      flexDirection?: string;
      justifyContent?: string;
      alignItems?: string;
      gap?: string;
      padding?: string;
    } | null;
  };
  children?: DslNode[];
};

export type TailwindMappedNode = {
  nodeType: string;
  name: string;
  className: string;
  style: Record<string, string | number>;
  errors?: string[];
  children: TailwindMappedNode[];
};

export declare function mapDslNodeToTailwind(
  node: DslNode,
  tokenStore: Record<string, unknown>,
  options?: { parentIsRelative?: boolean; enablePosition?: boolean }
): { className: string; style: Record<string, string | number>; errors?: string[] };

export declare function mapDslTreeToTailwind(
  node: DslNode,
  tokenStore: Record<string, unknown>,
  options?: { enablePosition?: boolean }
): TailwindMappedNode;
