import { InputHTMLAttributes, ReactNode, useId } from "react";
import { inputStyles, type InputVariants } from "./styles";
import { cn } from "@/lib/utils";

interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size">, InputVariants {
  label?: string;
  error?: string;
  leftSection?: ReactNode;
  rightSection?: ReactNode;
}

export function Input({
  label,
  error,
  leftSection,
  rightSection,
  variant,
  status,
  className,
  id,
  ...props
}: InputProps) {
  const generatedId = useId();
  const inputId = id || generatedId;

  // 에러가 있으면 강제로 error 상태를 보여줍니다.
  const currentStatus = error ? "error" : status;

  const {
    base,
    label: labelStyle,
    inputWrapper,
    input,
    errorText,
  } = inputStyles({
    variant,
    status: currentStatus,
  });

  return (
    <div className={base()}>
      {label && (
        <label htmlFor={inputId} className={labelStyle()}>
          {label}
        </label>
      )}

      <div className={cn(inputWrapper(), className)}>
        {leftSection && (
          <div className="pl-3 flex items-center justify-center text-gray-400">
            {leftSection}
          </div>
        )}

        <input id={inputId} className={input()} {...props} />

        {rightSection && (
          <div className="pr-3 flex items-center justify-center text-gray-400">
            {rightSection}
          </div>
        )}
      </div>

      {error && <p className={errorText()}>{error}</p>}
    </div>
  );
}
