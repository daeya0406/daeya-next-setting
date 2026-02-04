// shared/ui/button/styles.ts
import { tv, type VariantProps } from "tailwind-variants";

export const buttonStyles = tv({
  slots: {
    root: [
      "inline-flex items-center justify-center select-none cursor-pointer transition-all",
      "active:scale-95", // 클릭 시 살짝 작아지는 모션
      "disabled:cursor-not-allowed disabled:opacity-50 disabled:grayscale-[50%] disabled:active:scale-100",
      // 커서 변경, 투명도 조절, 회색조 추가, 클릭 애니메이션 제거
    ],
    label: "shrink-0 font-medium",
    icon: "shrink-0 flex items-center justify-center",
  },
  variants: {
    variant: {
      primary: { root: "bg-primary text-white hover:opacity-90" },
      secondary: {
        root: "bg-white text-gray-900 border border-gray-200 hover:bg-gray-50",
      },
      outline: {
        root: "border-2 border-primary text-primary hover:bg-primary/5",
      },
      ghost: {
        root: "bg-transparent text-gray-600 hover:bg-gray-100 hover:text-gray-900",
      },
    },
    size: {
      sm: { root: "px-4 py-2 text-sm", icon: "w-4 h-4 mr-1" },
      md: { root: "px-6 py-3 text-base", icon: "w-5 h-5 mr-2" }, // 📏 LG 사이즈 추가
      lg: { root: "px-8 py-4 text-lg font-semibold", icon: "w-6 h-6 mr-3" },
      full: { root: "w-full py-3 text-base", icon: "w-5 h-5 mr-2" },
      icon: { root: "p-2 aspect-square", icon: "m-0" },
    },
    radius: {
      sm: { root: "rounded-sm" },
      md: { root: "rounded-md" },
      lg: { root: "rounded-lg" },
      full: { root: "rounded-full" },
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
    radius: "md",
  },
});

export type ButtonVariants = VariantProps<typeof buttonStyles>;
