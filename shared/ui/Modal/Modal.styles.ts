import { tv } from "tailwind-variants";

export const modalStyles = tv({
  slots: {
    overlay:
      "fixed inset-0 z-50 bg-black/50 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
    content: [
      "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-white p-6 shadow-xl duration-200 rounded-2xl",
      "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]",
    ],
    header: "flex flex-col space-y-1.5 text-center sm:text-left",
    title: "text-lg font-semibold leading-none tracking-tight",
    description: "text-sm text-gray-500",
    footer:
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 gap-1 mt-4",
    close:
      "absolute right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none disabled:pointer-events-none",
  },
  variants: {
    size: {
      sm: { content: "max-w-sm" },
      md: { content: "max-w-lg" },
      lg: { content: "max-w-2xl" },
      full: { content: "max-w-[95vw] h-[90vh]" },
    },
  },
  defaultVariants: {
    size: "md",
  },
});
