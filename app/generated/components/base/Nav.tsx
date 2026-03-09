import type { CSSProperties, ReactNode } from "react";

type NavProps = {
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
};

export function Nav({ children, className = "", style }: NavProps) {
  return (
    <nav className={className} style={style}>
      {children}
    </nav>
  );
}
