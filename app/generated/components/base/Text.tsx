import type { CSSProperties } from "react";

type TextProps = { value?: string; className?: string; style?: CSSProperties };

export function Text({ value = "", className = "", style }: TextProps) {
  return (
    <div className={className} style={style}>
      {value}
    </div>
  );
}
