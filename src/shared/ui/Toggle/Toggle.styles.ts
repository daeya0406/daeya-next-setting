import { tv } from "tailwind-variants";

export const toggleStyles = tv({
  slots: {
    container: "flex items-center gap-3",
    wrapper: "relative inline-flex items-center",
    track: [
      "h-6 w-11 cursor-pointer rounded-full bg-gray-200 transition-colors relative",
      'after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:bg-white after:shadow after:transition-all after:content-[""]',

      // 1. 체크되었을 때 (peer-checked)
      "peer-checked:bg-primary",
      "peer-checked:after:translate-x-5",

      // 2. 포커스 되었을 때 (peer-focus-visible)
      "peer-focus-visible:ring-2",
      "peer-focus-visible:ring-primary",
      "peer-focus-visible:ring-offset-2",

      // 3. 비활성화 (peer-disabled)
      "peer-disabled:cursor-not-allowed",
      "peer-disabled:opacity-50",
    ],
    labelContainer: "flex flex-col",
    label: "cursor-pointer select-none text-sm font-medium",
    description: "text-xs text-gray-500",
  },
  variants: {
    size: {
      sm: {
        track: "h-5 w-9 after:h-4 after:w-4 checked:after:translate-x-4",
        label: "text-xs",
      },
      md: {
        track: "h-6 w-11 after:h-5 after:w-5 checked:after:translate-x-5",
        label: "text-sm",
      },
      lg: {
        track: "h-7 w-14 after:h-6 after:w-6 checked:after:translate-x-7",
        label: "text-base",
      },
    },
    error: {
      true: {
        track: "bg-red-100 checked:bg-red-500",
        label: "text-red-600",
      },
    },
  },
  defaultVariants: {
    size: "md",
  },
});
