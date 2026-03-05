/**
 * Banner 组件
 * 来源: dsl/snapshots/semantic-skeleton.json
 */
export interface BannerProps {
  title?: string;
  description?: string;
  backgroundImage?: string;
  children?: React.ReactNode;
}

export function Banner({ title, description, backgroundImage, children }: BannerProps) {
  const bgStyle = backgroundImage 
    ? { backgroundImage: `url(${backgroundImage})` }
    : { background: 'linear-gradient(to right, #3b82f6, #8b5cf6)' };
  
  return (
    <div 
      className="w-full h-[400px] flex items-center justify-center text-white"
      style={bgStyle}
    >
      {children || (
        <div className="text-center">
          {title && <h1 className="text-4xl font-bold">{title}</h1>}
          {description && <p className="mt-4 text-xl">{description}</p>}
        </div>
      )}
    </div>
  );
}

export default Banner;
