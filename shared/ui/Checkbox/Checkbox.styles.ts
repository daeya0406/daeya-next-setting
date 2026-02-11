import { tv } from "tailwind-variants";

export const checkboxStyles = tv({
  slots: {
    container: "flex items-center gap-2",
    wrapper: "relative flex items-center justify-center",
    input:
      "peer h-5 w-5 cursor-pointer appearance-none rounded border-2 border-gray-300 transition-all checked:border-primary checked:bg-primary hover:border-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
    icon: "pointer-events-none absolute text-white opacity-0 peer-checked:opacity-100",
    label:
      "cursor-pointer select-none text-sm font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
    description: "text-xs text-gray-500",
  },
  variants: {
    size: {
      sm: {
        input: "h-4 w-4",
        label: "text-xs",
      },
      md: {
        input: "h-5 w-5",
        label: "text-sm",
      },
      lg: {
        input: "h-6 w-6",
        label: "text-base",
      },
    },
    error: {
      true: {
        input: "border-red-500 focus:ring-red-500",
        label: "text-red-600",
      },
    },
  },
  defaultVariants: {
    size: "md",
  },
});
