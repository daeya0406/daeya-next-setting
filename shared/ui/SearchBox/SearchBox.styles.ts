import { tv } from "tailwind-variants";

export const searchBoxStyles = tv({
  slots: {
    base: "flex items-center w-full h-11 px-3 gap-2 rounded-lg border bg-white transition-all focus-within:border-primary focus-within:ring-1 focus-within:ring-primary group",
    input:
      "flex-1 h-full bg-transparent outline-none text-sm text-gray-900 placeholder:text-gray-400",
    icon: "text-gray-400 group-focus-within:text-primary shrink-0",
    button:
      "cursor-pointer min-w-12 h-full px-3 bg-primary text-white rounded-r-md shrink-0 font-medium text-sm flex justify-center items-center gap-1.5",
  },
  variants: {
    hasButton: {
      true: {
        base: "border-primary pr-0 pl-4",
      },
      false: {
        base: "border-gray-200 pl-3 pr-3",
      },
    },
  },
});
