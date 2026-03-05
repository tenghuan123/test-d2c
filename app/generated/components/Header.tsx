import type { ReactNode } from "react";

type HeaderProps = { children?: ReactNode; className?: string };

export function Header({ children, className = "" }: HeaderProps) {
  return <header className={className}>{children}</header>;
}
