export type DslNode = {
  nodeType?: string;
  name?: string;
  styleRefs?: string[];
  ext?: {
    layoutStyle?: {
      width?: number;
      height?: number;
    };
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
  children: TailwindMappedNode[];
};

export declare function mapDslNodeToTailwind(
  node: DslNode,
  tokenStore: Record<string, unknown>
): { className: string; style: Record<string, string | number> };

export declare function mapDslTreeToTailwind(
  node: DslNode,
  tokenStore: Record<string, unknown>
): TailwindMappedNode;
