import { type ButtonHTMLAttributes } from "react";
import { buttonStyles, type ButtonVariants } from "./styles";
import { Loading } from "@/shared/ui/loading";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>, ButtonVariants {
  isLoading?: boolean;
}

export function Button({
  className,
  variant,
  size,
  radius,
  isLoading,
  children,
  disabled,
  ...props
}: ButtonProps) {
  const { root } = buttonStyles({ variant, size, radius });

  return (
    <button
      className={root({ class: className })}
      disabled={isLoading || disabled}
      {...props}
    >
      {isLoading ? <Loading className="mr-2" size={14} /> : null}
      {children}
    </button>
  );
}
