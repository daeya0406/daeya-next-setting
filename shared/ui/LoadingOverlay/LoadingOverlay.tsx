import { Spinner } from "@/shared/ui/Spinner";
import { loadingOverlayStyles } from "./LoadingOverlay.styles";
import type { VariantProps } from "tailwind-variants";

// tv에서 정의한 타입들을 자동으로 추출해서 props 타입으로 사용
type LoadingOverlayVariants = VariantProps<typeof loadingOverlayStyles>;

interface LoadingOverlayProps extends LoadingOverlayVariants {
  text?: string;
  className?: string;
}

export function LoadingOverlay({
  className,
  text = "로딩 중...",
  type, // absolute | fixed
}: LoadingOverlayProps) {
  return (
    <div className={loadingOverlayStyles({ type, className })}>
      <Spinner size="lg" />
      {text && (
        <p className="text-muted-foreground text-sm font-medium animate-pulse">
          {text}
        </p>
      )}
    </div>
  );
}
