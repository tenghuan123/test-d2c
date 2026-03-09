import type { CSSProperties, ReactNode } from "react";

type LinkProps = {
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
};

export function Link({ children, className = "", style }: LinkProps) {
  return (
    <div className={className} style={style}>
      {children}
    </div>
  );
}
