"use client";

import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { forwardRef } from "react";

export const RadioGroup = RadioGroupPrimitive.Root;

export const RadioItem = forwardRef<
  HTMLButtonElement,
  RadioGroupPrimitive.RadioGroupItemProps & { label?: string }
>(({ label, className, ...props }, ref) => {
  return (
    <label className="flex items-center gap-2 cursor-pointer">
      <RadioGroupPrimitive.Item
        ref={ref}
        className={`
          peer h-5 w-5 rounded-full border border-gray-300 bg-white
          pointer-events-none
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2
          disabled:cursor-not-allowed disabled:opacity-50
          data-[state=checked]:border-primary transition-colors
        `}
        {...props}
      >
        <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
          <div className="h-2.5 w-2.5 rounded-full bg-primary" />
        </RadioGroupPrimitive.Indicator>
      </RadioGroupPrimitive.Item>
      {label && (
        <span className="text-sm font-medium text-gray-700">{label}</span>
      )}
    </label>
  );
});

RadioItem.displayName = "RadioItem";
