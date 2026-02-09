import { tv } from "tailwind-variants";

export const searchBoxStyles = tv({
  slots: {
    base: "relative flex items-center w-full group",
    input:
      "w-full pl-10 pr-4 py-2 rounded-lg border focus:ring-2 outline-none transition-all",
    icon: "absolute left-3 text-muted-foreground group-focus-within:text-primary transition-colors",
  },
});
