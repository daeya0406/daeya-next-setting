import { tv } from "tailwind-variants";

export const tableStyles = tv({
  slots: {
    wrapper: "w-full overflow-auto rounded-lg border border-gray-200",
    table: "w-full text-sm text-left",
    thead: "bg-gray-50 border-b border-gray-200",
    tbody: "",
    th: "px-4 py-3 font-semibold text-gray-900",
    tr: "border-b border-gray-100 last:border-0 hover:bg-gray-50/50 transition-colors",
    td: "px-4 py-3 text-gray-600",
  },
});
