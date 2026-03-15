import { tv } from "tailwind-variants";

export const paginationStyles = tv({
  slots: {
    base: "flex items-center justify-center gap-1 mt-6",
    // 기본적으로 하단에 투명 보더를 깔아 높이 변화를 방지
    button:
      "flex items-center justify-center w-10 h-10 text-sm font-medium transition-all border-b-2 border-transparent",
    arrow:
      "text-gray-500 hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed rounded-md",
    page: "text-gray-600 hover:text-primary hover:bg-primary/5",
  },
  variants: {
    isActive: {
      true: {
        button: "border-primary",
        page: "text-primary font-bold bg-primary/5",
      },
    },
  },
});
