import type { ReactNode } from "react";

type NavProps = { children?: ReactNode; className?: string };

export function Nav({ children, className = "" }: NavProps) {
  return <nav className={className}>{children}</nav>;
}
