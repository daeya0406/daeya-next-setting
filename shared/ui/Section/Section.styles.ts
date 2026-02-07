import { tv } from "tailwind-variants";

export const sectionStyles = tv({
  slots: {
    root: "w-full rounded-2xl transition-colors",
    header: "flex items-center justify-between mb-4",
    title: "text-lg font-bold text-gray-900",
    content: "relative",
  },
  variants: {
    level: {
      1: { root: "bg-gray-50 p-8 border border-gray-100" },
      2: { root: "bg-gray-100 p-6 border border-gray-100/50" },
      3: { root: "bg-gray-200 p-4" },
    },
  },
  defaultVariants: {
    level: 1,
  },
});
