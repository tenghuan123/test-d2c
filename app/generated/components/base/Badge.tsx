import type { CSSProperties, ReactNode } from "react";

type BadgeProps = {
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
};

export function Badge({ children, className = "", style }: BadgeProps) {
  return (
    <div className={className} style={style}>
      {children}
    </div>
  );
}
