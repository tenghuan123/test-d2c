import type { CSSProperties, ReactNode } from "react";

type CardProps = {
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
};

export function Card({ children, className = "", style }: CardProps) {
  return (
    <div className={className} style={style}>
      {children}
    </div>
  );
}
