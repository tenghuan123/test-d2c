/**
 * Description 组件
 * 来源: dsl/snapshots/semantic-skeleton.json
 */
export interface DescriptionProps {
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
  color?: string;
}

export function Description({ children, size = 'md', color = 'gray-600' }: DescriptionProps) {
  const sizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg'
  };
  
  return (
    <p className={`${sizeClasses[size]} text-${color}`}>
      {children}
    </p>
  );
}

export default Description;
