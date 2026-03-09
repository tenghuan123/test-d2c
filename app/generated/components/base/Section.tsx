import type { CSSProperties, ReactNode } from "react";

type SectionProps = {
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
};

export function Section({ children, className = "", style }: SectionProps) {
  return (
    <section className={className} style={style}>
      {children}
    </section>
  );
}
