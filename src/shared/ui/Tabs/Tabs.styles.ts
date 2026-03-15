import { tv } from "tailwind-variants";

export const tabsStyles = tv({
  slots: {
    root: "flex flex-col w-full",
    list: "flex items-center", // 탭 버튼들 들어가는 곳
    trigger:
      "px-4 py-2 text-sm font-medium transition-all outline-none cursor-pointer disabled:opacity-50",
    content: "py-4 outline-none", // 탭 내용 들어가는 곳
  },
  variants: {
    variant: {
      line: {
        list: "border-b border-gray-200",
        trigger:
          "border-b-2 -mb-px data-[state=active]:border-primary data-[state=active]:text-primary data-[state=inactive]:border-transparent data-[state=inactive]:text-gray-500 hover:text-gray-700",
      },
      pill: {
        list: "gap-2",
        trigger:
          "rounded-full border border-gray-200 data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:border-primary data-[state=inactive]:bg-transparent data-[state=inactive]:text-gray-500 hover:bg-gray-50",
      },
    },
  },
  defaultVariants: {
    variant: "line",
  },
});
