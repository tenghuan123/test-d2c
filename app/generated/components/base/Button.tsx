import type { CSSProperties, ReactNode } from "react";

type ButtonProps = {
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
};

export function Button({ children, className = "", style }: ButtonProps) {
  return (
    <button className={className} style={style}>
      {children}
    </button>
  );
}
