import { Spinner } from '@/shared/ui/Spinner';
import { cn } from '@/lib/utils';
import type { PropsWithClassName } from '@/shared/types';

interface LoadingOverlayProps extends PropsWithClassName {
  text?: string;
  fullScreen?: boolean;
}

export function LoadingOverlay({
  className,
  text = '로딩 중...',
  fullScreen = false,
}: LoadingOverlayProps) {
  return (
    <div
      className={cn(
        'bg-background/80 flex flex-col items-center justify-center gap-4 backdrop-blur-sm',
        fullScreen ? 'fixed inset-0 z-50' : 'absolute inset-0',
        className
      )}
    >
      <Spinner size="lg" />
      {text && <p className="text-muted-foreground text-sm">{text}</p>}
    </div>
  );
}
