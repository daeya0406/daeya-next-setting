"use client";

import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check, Minus } from "lucide-react";
import { forwardRef } from "react";

export interface CheckboxProps extends CheckboxPrimitive.CheckboxProps {
  label?: string;
  error?: string;
}

export const Checkbox = forwardRef<HTMLButtonElement, CheckboxProps>(
  ({ label, error, checked, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1.5">
        <label className="flex items-center gap-2 cursor-pointer group">
          <CheckboxPrimitive.Root
            ref={ref}
            checked={checked}
            className={`
              peer h-5 w-5 shrink-0 rounded border border-gray-300 bg-white
              pointer-events-none
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2
              disabled:cursor-not-allowed disabled:opacity-50
              data-[state=checked]:bg-primary data-[state=checked]:border-primary
              data-[state=indeterminate]:bg-primary data-[state=indeterminate]:border-primary
              transition-colors
            `}
            {...props}
          >
            <CheckboxPrimitive.Indicator className="flex items-center justify-center text-white">
              {checked === "indeterminate" ? (
                <Minus className="h-3.5 w-3.5 stroke-[3]" />
              ) : (
                <Check className="h-3.5 w-3.5 stroke-[3]" />
              )}
            </CheckboxPrimitive.Indicator>
          </CheckboxPrimitive.Root>

          {label && (
            <span className="text-sm font-medium select-none text-gray-700">
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
