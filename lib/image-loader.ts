export interface ImageLoaderProps {
  src: string;
  width: number;
  quality?: number;
}

export function defaultImageLoader({ src }: ImageLoaderProps) {
  if (src.startsWith("data:") || src.startsWith("blob:")) return src;

  return src;
}

/** 외부 CDN용 로더 */
export function externalImageLoader({ src }: ImageLoaderProps) {
  return src;
}
