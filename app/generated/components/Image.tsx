/**
 * Image 组件
 * 来源: dsl/snapshots/semantic-skeleton.json
 */
export interface ImageProps {
  src?: string;
  alt?: string;
  width?: number | string;
  height?: number | string;
  objectFit?: 'cover' | 'contain' | 'fill';
  rounded?: boolean;
}

export function Image({ 
  src, 
  alt = '', 
  width = '100%', 
  height = '100%',
  objectFit = 'cover',
  rounded = false
}: ImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={`${rounded ? 'rounded' : ''} object-${objectFit}`}
    />
  );
}

export default Image;
