import type { CSSProperties } from "react";

type DescriptionProps = {
  value?: string;
  className?: string;
  style?: CSSProperties;
};

export function Description({
  value = "",
  className = "",
  style,
}: DescriptionProps) {
  return (
    <p className={className} style={style}>
      {value}
    </p>
  );
}
