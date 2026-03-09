import type { CSSProperties, ReactNode } from "react";

type ActionButtonProps = {
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
};

export function ActionButton({
  children,
  className = "",
  style,
}: ActionButtonProps) {
  return (
    <div className={className} style={style}>
      {children}
    </div>
  );
}
