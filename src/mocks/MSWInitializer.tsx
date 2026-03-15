"use client";

import { useEffect, useState } from "react";

export default function MSWInitializer({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMockingReady, setIsMockingReady] = useState(false);

  useEffect(() => {
    async function startMocking() {
      // 1. 개발 환경이 아닐 때는 바로 준비 완료 처리
      if (process.env.NODE_ENV !== "development") {
        setIsMockingReady(true);
        return;
      }

      // 2. 브라우저 환경에서만 워커를 실행
      if (typeof window !== "undefined") {
        const { worker } = await import("./browser");
        await worker.start({
          onUnhandledRequest: "bypass", // 모킹 안 된 요청은 그냥 통과
        });
        setIsMockingReady(true);
      }
    }

    startMocking();
  }, []);

  // MSW가 준비될 때까지 화면을 그리지 않음 (404 방지)
  if (!isMockingReady) {
    return null;
  }

  return <>{children}</>;
}
