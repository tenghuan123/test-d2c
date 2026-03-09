import type { CSSProperties, ReactNode } from "react";

type InputProps = {
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
};

export function Input({ children, className = "", style }: InputProps) {
  return (
    <div className={className} style={style}>
      {children}
    </div>
  );
}
