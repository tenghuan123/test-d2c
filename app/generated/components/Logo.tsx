import type { ReactNode } from "react";

type LogoProps = { children?: ReactNode; className?: string };

export function Logo({ children, className = "" }: LogoProps) {
  return <div className={className}>{children}</div>;
}
