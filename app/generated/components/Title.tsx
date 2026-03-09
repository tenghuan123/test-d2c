import type { JSX } from "react";

/**
 * Title 组件
 * 来源: dsl/snapshots/semantic-skeleton.json
 */
export interface TitleProps {
  children: React.ReactNode;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
}

export function Title({ children, level = 1 }: TitleProps) {
  const levelClasses = {
    1: "text-4xl font-bold",
    2: "text-3xl font-bold",
    3: "text-2xl font-semibold",
    4: "text-xl font-semibold",
    5: "text-lg font-medium",
    6: "text-base font-medium",
  };

  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  return <Tag className={levelClasses[level]}>{children}</Tag>;
}

export default Title;
