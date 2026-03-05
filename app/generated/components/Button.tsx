import type { ReactNode } from "react";

type ButtonProps = { children?: ReactNode; className?: string };

export function Button({ children, className = "" }: ButtonProps) {
  return <button className={className}>{children}</button>;
}
