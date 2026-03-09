/**
 * Icon 组件
 * 来源: dsl/snapshots/semantic-skeleton.json
 */
export interface IconProps {
  name: string;
  size?: number;
  color?: string;
}

export function Icon({ name, size = 24, color = "currentColor" }: IconProps) {
  // 实际项目中可以接入 icon library 如 lucide-react, heroicons 等
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* 默认图标占位 */}
      <circle cx="12" cy="12" r="10" />
    </svg>
  );
}

export default Icon;
