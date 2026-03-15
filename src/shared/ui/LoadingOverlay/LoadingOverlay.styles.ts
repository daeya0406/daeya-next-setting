import { tv } from "tailwind-variants";

export const loadingOverlayStyles = tv({
  base: "flex flex-col items-center justify-center gap-4 bg-background/80 backdrop-blur-sm",
  variants: {
    type: {
      absolute: "absolute inset-0",
      fixed: "fixed inset-0 z-50",
    },
  },
  defaultVariants: {
    type: "absolute",
  },
});
