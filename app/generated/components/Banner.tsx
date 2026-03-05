import type { ReactNode } from "react";

type BannerProps = { children?: ReactNode; className?: string };

export function Banner({ children, className = "" }: BannerProps) {
  return <div className={className}>{children}</div>;
}
