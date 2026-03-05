import type { ReactNode } from "react";

type TextProps = { children?: ReactNode; className?: string };

export function Text({ children, className = "" }: TextProps) {
  return <div className={className}>{children}</div>;
}
