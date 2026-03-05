import type { ReactNode } from "react";

type LinkProps = { children?: ReactNode; className?: string };

export function Link({ children, className = "" }: LinkProps) {
  return <div className={className}>{children}</div>;
}
