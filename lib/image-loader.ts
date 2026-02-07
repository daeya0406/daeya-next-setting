/**
 * Custom image loader for Next.js Image component
 * Next.js Image 컴포넌트를 위한 커스텀 이미지 로더
 */

export interface ImageLoaderProps {
  src: string;
  width: number;
  quality?: number;
}

/**
 * Default image loader
 */
export function defaultImageLoader({ src, width, quality }: ImageLoaderProps) {
  if (src.startsWith('data:') || src.startsWith('blob:')) {
    return src;
  }

  const params = new URLSearchParams();
  params.set('url', src);
  params.set('w', width.toString());
  if (quality) {
    params.set('q', quality.toString());
  }

  return `/_next/image?${params.toString()}`;
}

/**
 * External image loader (for CDN or external image services)
 */
export function externalImageLoader({
  src,
  width: _width,
  quality: _quality,
}: ImageLoaderProps) {
  // Example: Cloudinary
  // return `https://res.cloudinary.com/your-cloud-name/image/upload/w_${width},q_${quality || 75}/${src}`;

  // Example: imgix
  // return `https://your-domain.imgix.net/${src}?w=${width}&q=${quality || 75}&auto=format`;

  return src;
}
