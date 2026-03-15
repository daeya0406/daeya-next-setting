"use client";

import { Toaster as Sonner, toast } from "sonner";
import { toastStyles } from "./Toast.styles";
import { CheckCircle2, AlertCircle, AlertTriangle, Info } from "lucide-react";

export function ToastProvider() {
  // 여기서 미리 styles를 만들어두지 말고, Sonner 내부에서 매번 생성하게 하는 게 안전함

  return (
    <Sonner
      position="bottom-right"
      toastOptions={{
        unstyled: true,
        classNames: {
          // toast 슬롯에만 기본 스타일을 줌. Sonner가 스스로 data-type에 맞춰 클래스를 조합하도록
          toast: toastStyles().toast(),
          title: toastStyles().title(),
          description: toastStyles().description(),
        },
      }}
      icons={{
        success: <CheckCircle2 className="h-5 w-5" />,
        error: <AlertCircle className="h-5 w-5" />,
        warning: <AlertTriangle className="h-5 w-5" />,
        info: <Info className="h-5 w-5" />,
      }}
    />
  );
}

export { toast };
