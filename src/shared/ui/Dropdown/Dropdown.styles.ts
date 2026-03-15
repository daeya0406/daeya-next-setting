import { tv } from "tailwind-variants";

export const dropdownStyles = tv({
  slots: {
    content:
      "min-w-[160px] bg-white rounded-lg border border-gray-200 shadow-lg p-1 z-[100] animate-dropdown-in",
    item: "relative flex cursor-pointer select-none items-center rounded-md px-3 py-2 text-sm outline-none transition-colors hover:bg-gray-100 focus:bg-gray-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
    label: "px-3 py-2 text-xs font-semibold text-gray-500",
    separator: "my-1 h-px bg-gray-200",
    trigger: "inline-flex items-center justify-center outline-none",
  },
});
