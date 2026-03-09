import type { CSSProperties, ReactNode } from "react";

type IconProps = {
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
};

export function Icon({ children, className = "", style }: IconProps) {
  return (
    <div className={className} style={style}>
      {children}
    </div>
  );
}
