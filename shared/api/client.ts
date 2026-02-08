import { env } from "@/lib/env";
import { RequestConfig } from "@/shared/types/api";

class ApiClient {
  private baseURL: string;
  private authToken: string | null = null; // 1. 메모리에 토큰 저장

  constructor() {
    const apiUrl = env.apiUrl;

    if (!apiUrl) {
      // 빌드 시점이나 런타임에 주소가 없으면 바로 알려줌
      console.warn("⚠️ API_URL이 설정되지 않았습니다. .env 파일을 확인하세요.");
    }

    this.baseURL = apiUrl || "";
  }

  /**
   * 인증 토큰 설정 (로그인 성공 시 호출)
   */
  public setAuthToken(token: string) {
    this.authToken = token;
  }

  /**
   * 인증 토큰 삭제 (로그아웃 시 호출)
   */
  public clearAuthToken() {
    this.authToken = null;
  }

  public async get<T>(endpoint: string, config?: RequestConfig) {
    return this.request<T>(endpoint, { ...config, method: "GET" });
  }

  public async post<T>(endpoint: string, config?: RequestConfig) {
    return this.request<T>(endpoint, { ...config, method: "POST" });
  }

  public async put<T>(endpoint: string, config?: RequestConfig) {
    return this.request<T>(endpoint, { ...config, method: "PUT" });
  }

  public async delete<T>(endpoint: string, config?: RequestConfig) {
    return this.request<T>(endpoint, { ...config, method: "DELETE" });
  }

  private async request<T>(
    endpoint: string,
    config: RequestConfig = {},
  ): Promise<T> {
    const { params, headers, body, method, ...rest } = config;

    // 1. URL 조립
    const baseUrl = this.baseURL.replace(/\/+$/, "");
    const path = endpoint.replace(/^\/+/, "");
    let fullUrl = `${baseUrl}/${path}`;

    if (params) {
      const searchParams = new URLSearchParams();
      Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined) searchParams.append(key, String(value));
      });
      fullUrl += `?${searchParams.toString()}`;
    }

    // 2. Body 직렬화
    const serializedBody =
      body && typeof body === "object"
        ? JSON.stringify(body)
        : (body as BodyInit);

    try {
      const response = await fetch(fullUrl, {
        ...rest,
        method,
        headers: {
          "Content-Type": "application/json",
          // 2. 토큰이 있을 경우 Authorization 헤더 자동 추가
          ...(this.authToken && { Authorization: `Bearer ${this.authToken}` }),
          ...headers,
        },
        body: serializedBody,
      });

      if (!response.ok) {
        // HTTP 에러 상세 정보 포함
        const errorBody = await response.json().catch(() => ({}));
        throw new Error(
          errorBody.message || `HTTP Error! status: ${response.status}`,
        );
      }

      return await response.json();
    } catch (error) {
      console.error("Fetch Error:", fullUrl, error);
      throw error;
    }
  }
}

export const apiClient = new ApiClient();
