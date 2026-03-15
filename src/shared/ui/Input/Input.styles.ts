import { tv, type VariantProps } from "tailwind-variants";

export const inputStyles = tv({
  slots: {
    base: "flex flex-col gap-1.5 w-full",
    label: "text-sm font-medium text-gray-700 ml-0.5",
    inputWrapper: [
      "relative flex items-stretch bg-white border border-gray-200 transition-all shadow-sm overflow-hidden", // items-stretch로 변경
      "focus-within:ring-4 focus-within:ring-primary/10 focus-within:border-primary",
      "has-[:disabled]:bg-gray-50 has-[:disabled]:cursor-not-allowed",
    ],
    input: [
      "flex-1 bg-transparent px-3 py-3 text-sm outline-none placeholder:text-gray-400 h-full", // flex-1과 h-full 추가
      "disabled:text-gray-500 disabled:cursor-not-allowed",
    ],
    errorText:
      "text-xs text-red-500 ml-0.5 mt-0.5 animate-in fade-in slide-in-from-top-1",
  },
  variants: {
    variant: {
      outline: { inputWrapper: "rounded-md" },
      filled: {
        inputWrapper:
          "bg-gray-100 border-transparent focus-within:bg-white rounded-md",
      },
      underline: {
        inputWrapper:
          "border-0 border-b-2 rounded-none px-0 shadow-none focus-within:ring-0",
      },
    },
    status: {
      default: {},
      error: {
        inputWrapper:
          "border-red-500 focus-within:ring-red-100 focus-within:border-red-500",
        label: "text-red-500",
      },
      success: {
        inputWrapper:
          "border-green-500 focus-within:ring-green-100 focus-within:border-green-500",
      },
    },
  },
  defaultVariants: {
    variant: "outline",
    status: "default",
  },
});

export type InputVariants = VariantProps<typeof inputStyles>;
