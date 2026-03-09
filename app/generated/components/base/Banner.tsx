import type { CSSProperties, ReactNode } from "react";

type BannerProps = {
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
};

export function Banner({ children, className = "", style }: BannerProps) {
  return (
    <div className={className} style={style}>
      {children}
    </div>
  );
}
