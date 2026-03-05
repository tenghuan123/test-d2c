import type { ReactNode } from "react";

type FooterProps = { children?: ReactNode; className?: string };

export function Footer({ children, className = "" }: FooterProps) {
  return <footer className={className}>{children}</footer>;
}
