import type { CSSProperties } from "react";

type TitleProps = { value?: string; className?: string; style?: CSSProperties };

export function Title({ value = "", className = "", style }: TitleProps) {
  return (
    <h2 className={className} style={style}>
      {value}
    </h2>
  );
}
