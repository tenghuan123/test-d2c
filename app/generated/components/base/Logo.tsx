import type { CSSProperties, ReactNode } from "react";

type LogoProps = {
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
};

export function Logo({ children, className = "", style }: LogoProps) {
  return (
    <div className={className} style={style}>
      {children}
    </div>
  );
}
