import type { ReactNode } from "react";

type ListProps = { children?: ReactNode; className?: string };

export function List({ children, className = "" }: ListProps) {
  return <ul className={className}>{children}</ul>;
}
