import type { CSSProperties } from "react";

type ImageProps = {
  src?: string;
  alt?: string;
  className?: string;
  style?: CSSProperties;
};

export function Image({
  src = "",
  alt = "",
  className = "",
  style,
}: ImageProps) {
  return <img src={src} alt={alt} className={className} style={style} />;
}
