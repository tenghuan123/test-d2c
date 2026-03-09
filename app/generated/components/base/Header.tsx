import type { CSSProperties, ReactNode } from "react";

type HeaderProps = {
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
};

export function Header({ children, className = "", style }: HeaderProps) {
  return (
    <header className={className} style={style}>
      {children}
    </header>
  );
}
