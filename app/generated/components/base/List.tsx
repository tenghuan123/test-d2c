import type { CSSProperties, ReactNode } from "react";

type ListProps = {
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
};

export function List({ children, className = "", style }: ListProps) {
  return (
    <ul className={className} style={style}>
      {children}
    </ul>
  );
}
