import { render, screen, fireEvent } from "@testing-library/react";
import LoginPage from "./page";

describe("로그인 페이지 테스트", () => {
  it("이메일과 비밀번호 입력란이 렌더링", () => {
    // screen.getByLabelText 활용 예정
  });

  it("잘못된 이메일 형식을 입력하면 에러 메시지를 보여주기", async () => {
    // 잘못된 이메일 형식 입력시 toast.error("에러 메세지")
  });
});
