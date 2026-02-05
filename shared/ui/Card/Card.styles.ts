import { tv, type VariantProps } from "tailwind-variants";

export const cardStyles = tv({
  base: "flex flex-col bg-white border transition-all",
  variants: {
    variant: {
      default: "border-gray-100",
      outline: "border-gray-200 shadow-none",
      flat: "border-transparent bg-gray-50 shadow-none",
    },
    size: {
      sm: "p-4 rounded-lg gap-2",
      md: "p-6 rounded-xl gap-3",
      lg: "p-10 rounded-2xl gap-6",
      full: "p-0 rounded-none",
    },
  },
  compoundVariants: [
    { variant: "default", size: "sm", class: "shadow-sm" },
    { variant: "default", size: "md", class: "shadow-md" },
    { variant: "default", size: "lg", class: "shadow-xl" },
  ],
  defaultVariants: {
    variant: "default",
    size: "md",
  },
});

export type CardVariants = VariantProps<typeof cardStyles>;
