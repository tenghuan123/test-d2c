/**
 * Card 组件
 * 来源: dsl/snapshots/semantic-skeleton.json - card-38aa4e40
 * 重复使用次数: 12
 */
export interface CardProps {
  title?: string;
  description?: string;
  image?: string;
  tags?: string[];
}

export function Card({ title, description, image, tags }: CardProps) {
  return (
    <div className="flex flex-col gap-3 p-4 border rounded-lg hover:shadow-lg transition-shadow">
      {/* 图片 */}
      {image && (
        <div className="w-full h-[200px] bg-gray-200 rounded">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
      )}
      
      {/* 标题 */}
      {title && (
        <h3 className="text-lg font-semibold text-gray-900">
          {title}
        </h3>
      )}
      
      {/* 描述 */}
      {description && (
        <p className="text-sm text-gray-600">
          {description}
        </p>
      )}
      
      {/* 标签 */}
      {tags && tags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span key={index} className="px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded">
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export default Card;
