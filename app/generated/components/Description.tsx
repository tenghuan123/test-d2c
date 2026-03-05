import type { ReactNode } from "react";

type DescriptionProps = { children?: ReactNode; className?: string };

export function Description({ children, className = "" }: DescriptionProps) {
  return <p className={className}>{children}</p>;
}
