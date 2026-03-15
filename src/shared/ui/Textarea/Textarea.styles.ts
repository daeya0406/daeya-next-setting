import { tv } from "tailwind-variants";

export const textareaStyles = tv({
  slots: {
    container: "flex flex-col gap-1.5 w-full",
    label: "text-sm font-medium text-gray-700",
    wrapper: "relative",
    textarea: [
      "w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm transition-colors",
      "placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
      "disabled:cursor-not-allowed disabled:opacity-50",
    ],
    counter: "text-xs text-right text-gray-500 mt-1",
    error: "text-xs text-red-600 mt-1",
  },
  variants: {
    size: {
      sm: { textarea: "min-h-[60px] text-xs" },
      md: { textarea: "min-h-[100px] text-sm" },
      lg: { textarea: "min-h-[150px] text-base" },
    },
    hasError: {
      true: { textarea: "border-red-500 focus-visible:ring-red-500" },
    },
    resize: {
      none: { textarea: "resize-none" },
      vertical: { textarea: "resize-y" }, // 수직만 허용
      horizontal: { textarea: "resize-x" },
      both: { textarea: "resize" },
    },
  },
  defaultVariants: {
    size: "md",
    resize: "vertical",
  },
});
