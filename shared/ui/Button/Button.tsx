"use client";

import React from "react";
import { Slot } from "@radix-ui/react-slot";
import { buttonStyles, type ButtonVariants } from "./Button.styles";
import { Loading } from "@/shared/ui/Loading";

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, ButtonVariants {
  asChild?: boolean; // 자식 요소에서 컴포넌트 권한 위임 (Link 등 사용 시)
  isLoading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      radius,
      isLoading,
      asChild = false,
      children,
      disabled,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";
    const { root } = buttonStyles({ variant, size, radius });

    // 1. asChild일 때는 Slot에게 모든 권한을 넘기고, 추가 태그를 절대 넣지 않음
    if (asChild) {
      return (
        <Comp ref={ref} className={root({ class: className })} {...props}>
          {children}
        </Comp>
      );
    }

    // 2. 일반 버튼일 때만 로딩 스피너 로직을 사용
    return (
      <button
        ref={ref}
        className={root({ class: className })}
        disabled={isLoading || disabled}
        {...props}
      >
        {isLoading && <Loading className="mr-2" size={14} />}
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";
