import type { CSSProperties, ReactNode } from "react";

type FooterProps = {
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
};

export function Footer({ children, className = "", style }: FooterProps) {
  return (
    <footer className={className} style={style}>
      {children}
    </footer>
  );
}
