import { forwardRef } from "react";
import { toggleStyles } from "./Toggle.styles";

export interface ToggleProps extends Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "size" | "onChange"
> {
  label?: string;
  description?: string;
  error?: string;
  size?: "sm" | "md" | "lg";
  onCheckedChange?: (checked: boolean) => void;
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

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const isChecked = e.target.checked;
      onChange?.(e);
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
            <div className={styles.track()} />
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
