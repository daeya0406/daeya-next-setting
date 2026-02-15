import { forwardRef } from "react";
import { textareaStyles } from "./Textarea.styles";

export interface TextareaProps extends Omit<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  "size"
> {
  label?: string;
  error?: string;
  size?: "sm" | "md" | "lg";
  resize?: "none" | "vertical" | "horizontal" | "both";
  showCounter?: boolean;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      className,
      label,
      error,
      size = "md",
      resize = "vertical",
      showCounter = false,
      maxLength,
      value,
      ...props
    },
    ref,
  ) => {
    const styles = textareaStyles({
      size,
      hasError: !!error,
      resize,
    });

    const currentLength = value ? String(value).length : 0;

    return (
      <div className={styles.container({ className })}>
        {label && <label className={styles.label()}>{label}</label>}
        <div className={styles.wrapper()}>
          <textarea
            ref={ref}
            className={styles.textarea()}
            maxLength={maxLength}
            value={value}
            {...props}
          />
        </div>
        {showCounter && maxLength && (
          <div className={styles.counter()}>
            {currentLength} / {maxLength}
          </div>
        )}
        {error && <span className={styles.error()}>{error}</span>}
      </div>
    );
  },
);

Textarea.displayName = "Textarea";
