import { render, screen } from "@testing-library/react";
import { describe, it, expect, beforeAll, afterAll, afterEach } from "vitest";
import { server } from "@/mocks/server"; // 서버 설정
import Home from "@/app/page"; // 테스트할 컴포넌트

// 1. 테스트 시작 전 서버 시작
beforeAll(() => server.listen());

// 2. 테스트 후 핸들러 초기화 (테스트 간 간섭 방지)
afterEach(() => server.resetHandlers());

// 3. 테스트 끝난 후 서버 종료
afterAll(() => server.close());

describe("로그인 API 테스트", () => {
  it("로그인 성공 시 사용자 이름이 화면에 노출", async () => {
    render(<Home />);

    // "Daeya"이라는 텍스트가 화면에 뜨는지 확인
    const nameElement = await screen.findByText("Daeya");
    expect(nameElement).toBeInTheDocument();
  });
});
