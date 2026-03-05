/**
 * List 组件
 * 来源: dsl/snapshots/semantic-skeleton.json
 */
export interface ListProps {
  children: React.ReactNode;
  direction?: 'row' | 'column';
  gap?: number;
}

export function List({ children, direction = 'column', gap = 4 }: ListProps) {
  const directionClass = direction === 'row' ? 'flex-row' : 'flex-col';
  
  return (
    <ul className={`flex ${directionClass} gap-${gap} list-none`}>
      {children}
    </ul>
  );
}

export interface ListItemProps {
  children: React.ReactNode;
  active?: boolean;
}

export function ListItem({ children, active = false }: ListItemProps) {
  return (
    <li className={active ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-50'}>
      {children}
    </li>
  );
}

export default List;
