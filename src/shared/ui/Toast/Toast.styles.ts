import { tv } from "tailwind-variants";

export const toastStyles = tv({
  slots: {
    toast:
      "group flex w-full items-start gap-3 border bg-background p-4 text-foreground shadow-lg transition-all rounded-lg",
    title: "text-sm font-semibold",
    description: "text-xs opacity-90",
  },
  // variants 대신 data 속성을 직접 쓰는 방식이 Sonner와 궁합이 제일 좋음
  // 이유는 Sonner가 알아서 클래스를 합칠 때 variants 로직이 꼬이기 때문
  compoundSlots: [
    {
      slots: ["toast"],
      class:
        "data-[type=info]:border-blue-200 data-[type=info]:bg-blue-50 data-[type=info]:text-blue-700 data-[type=success]:border-green-200 data-[type=success]:bg-green-50 data-[type=success]:text-green-700 data-[type=error]:border-red-200 data-[type=error]:bg-red-50 data-[type=error]:text-red-700 data-[type=warning]:border-yellow-200 data-[type=warning]:bg-yellow-50 data-[type=warning]:text-yellow-700",
    },
    {
      slots: ["title"],
      class:
        "group-data-[type=info]:text-blue-800 group-data-[type=success]:text-green-800 group-data-[type=error]:text-red-800 group-data-[type=warning]:text-yellow-800",
    },
  ],
});
