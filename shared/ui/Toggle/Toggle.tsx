import { forwardRef } from "react";
import { toggleStyles } from "./Toggle.styles";
import type { PropsWithClassName } from "@/shared/types";

export interface ToggleProps
  extends
    PropsWithClassName,
    Omit<React.InputHTMLAttributes<HTMLInputElement>, "size" | "onChange"> {
  label?: string;
  description?: string;
  error?: string;
  size?: "sm" | "md" | "lg";
  // 불리언 값만 바로 넘겨주는 핸들러 추가
  onCheckedChange?: (checked: boolean) => void;
  // 표준 onChange도 대응 가능하도록 선택적 추가
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Toggle = forwardRef<HTMLInputElement, ToggleProps>(
  (
    {
      className,
      label,
      description,
      error,
      size = "md",
      onCheckedChange,
      onChange,
      ...props
    },
    ref,
  ) => {
    const styles = toggleStyles({ size, error: !!error });

    // 내부 핸들러에서 input에 필요한 표준 로직 수행
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const isChecked = e.target.checked;

      // 1. 표준 onChange 호출
      onChange?.(e);
      // 2. 편리한 onCheckedChange 호출
      onCheckedChange?.(isChecked);
    };

    return (
      <div className={styles.container({ className })}>
        <label className="flex items-start gap-3 cursor-pointer group">
          <div className="relative flex items-center">
            <input
              {...props}
              ref={ref}
              type="checkbox"
              role="switch"
              checked={props.checked}
              onChange={handleChange}
              className="sr-only peer"
            />
            {/* 시각적 트랙 (토글 배경) */}
            <div className={`${styles.track()}`} />
          </div>

          {(label || description) && (
            <div className={styles.labelContainer()}>
              {label && <span className={styles.label()}>{label}</span>}
              {description && (
                <span className={styles.description()}>{description}</span>
              )}
              {error && (
                <span className="text-xs text-red-600 mt-1">{error}</span>
              )}
            </div>
          )}
        </label>
      </div>
    );
  },
);

Toggle.displayName = "Toggle";
