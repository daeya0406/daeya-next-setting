import { http, HttpResponse } from "msw";

export const authHandlers = [
  http.post("/api/login", async ({ request }) => {
    const data = (await request.json()) as { email: string };

    // 에러 테스트용: 특정 이메일 입력 시 401 에러
    if (data.email === "fail@test.com") {
      return new HttpResponse(null, { status: 401 });
    }

    // 성공 시 JSON 응답
    return HttpResponse.json({ name: "Daeya" });
  }),
];
