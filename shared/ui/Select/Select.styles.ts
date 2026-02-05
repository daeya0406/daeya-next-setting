import { tv } from "tailwind-variants";

export const selectStyles = tv({
  slots: {
    trigger: [
      "flex h-10 w-full items-center justify-between gap-2 rounded-lg border bg-white px-3 py-2 text-sm transition-all",
      "border-gray-200 shadow-sm",
      "hover:border-gray-300",
      "focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500",
      "data-[placeholder]:text-gray-400",
      "disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-400",
    ],
    content: [
      "z-50 min-w-[var(--radix-select-trigger-width)] overflow-hidden rounded-xl border border-gray-100 bg-white shadow-xl",
      "data-[state=open]:animate-in data-[state=closed]:animate-out",
      "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
      "data-[side=bottom]:slide-in-from-top-2 data-[side=top]:slide-in-from-bottom-2",
    ],
    item: [
      "relative flex w-full cursor-default select-none items-center rounded-md py-2 pl-8 pr-2 text-sm outline-none transition-colors",
      "focus:bg-blue-50 focus:text-blue-900",
      "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
    ],
    // 체크 표시가 들어갈 영역
    indicator: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
    // 드롭다운 내부 여백
    viewport: "p-1",
  },
});
