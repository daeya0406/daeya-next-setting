const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

// 쿠키에서 토큰을 꺼내는 작은 함수
const getAccessToken = () => {
  if (typeof document === "undefined") return null; // 브라우저 환경이 아닐 때 에러 방지
  const value = `; ${document.cookie}`;
  const parts = value.split(`; accessToken=`); // 우리가 저장한 쿠키 이름이 accessToken일 때
  if (parts.length === 2) return parts.pop()?.split(";").shift();
  return null;
};

// 의도에 맞게 개선된 apiRequest
export const apiRequest = async (url: string, options: RequestInit = {}) => {
  const token = getAccessToken();

  const defaultOptions: RequestInit = {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(token && { Authorization: `Bearer ${token}` }),
      ...options.headers,
    },
  };

  const response = await fetch(`${BASE_URL}${url}`, defaultOptions);

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || "요청에 실패했습니다.");
  }

  // 204 No Content(삭제 등)면 null 반환, 아니면 데이터 반환
  return response.status === 204 ? null : response.json();
};
