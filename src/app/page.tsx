"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState<{ name: string } | null>(null);

  useEffect(() => {
    // 우리가 auth.ts 핸들러에 만들어둔 /api/login을 호출해봅시다.
    fetch("/api/login", {
      method: "POST",
      body: JSON.stringify({ email: "test@test.com" }),
    })
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  return (
    <main style={{ padding: "2rem" }}>
      <h1>MSW 테스트 페이지</h1>
      {data ? (
        <p>
          응답받은 이름: <strong>{data.name}</strong>
        </p>
      ) : (
        <p>데이터를 가져오는 중...</p>
      )}
    </main>
  );
}
