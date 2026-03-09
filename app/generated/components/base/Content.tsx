import type { CSSProperties, ReactNode } from "react";

type ContentProps = {
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
};

export function Content({ children, className = "", style }: ContentProps) {
  return (
    <div className={className} style={style}>
      {children}
    </div>
  );
}
