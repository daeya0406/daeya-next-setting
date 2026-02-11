"use client";

import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Icon } from "@/shared/ui/Icons";
import { forwardRef } from "react";

export interface CheckboxProps extends CheckboxPrimitive.CheckboxProps {
  label?: string;
  error?: string;
}

export const Checkbox = forwardRef<HTMLButtonElement, CheckboxProps>(
  ({ label, error, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1.5">
        {/* label이 전체를 감싸서 어디를 눌러도 체크되게 함 */}
        <label className="group flex w-fit cursor-pointer items-center gap-2">
          <CheckboxPrimitive.Root
            ref={ref}
            className={`
              peer h-5 w-5 shrink-0 rounded border border-gray-300 bg-white
              /* 아이콘 위에서도 포인터가 유지되도록 이벤트를 라벨로 토스 */
              pointer-events-none 
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2
              disabled:cursor-not-allowed disabled:opacity-50
              data-[state=checked]:border-primary data-[state=checked]:bg-primary
              transition-colors
            `}
            {...props}
          >
            <CheckboxPrimitive.Indicator className="flex items-center justify-center text-white">
              <Icon name="check" size={14} strokeWidth={3} />
            </CheckboxPrimitive.Indicator>
          </CheckboxPrimitive.Root>

          {label && (
            <span className="select-none text-sm font-medium text-gray-700">
              {label}
            </span>
          )}
        </label>
        {error && <span className="text-xs text-red-500">{error}</span>}
      </div>
    );
  },
);

Checkbox.displayName = "Checkbox";
