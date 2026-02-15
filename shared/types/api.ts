// API 공통 규격
export type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

export interface ApiResponse<T = unknown> {
  data: T;
  status: number;
  message?: string;
  success: boolean;
}

export interface RequestConfig extends Omit<RequestInit, "method" | "body"> {
  method?: HttpMethod;
  // string, number, boolean 모두 허용하고 undefined도 넘길 수 있게 설정
  params?: Record<string, string | number | boolean | undefined>;
  body?: unknown;
  headers?: Record<string, string>;
}

// --- Auth 관련 ---
export interface SignupRequest {
  username: string;
  name: string;
  password: string;
  confirmPassword: string;
}

export interface LoginRequest {
  username: string;
  password: string;
}

export interface LoginResponse {
  accessToken: string;
  refreshToken: string;
}

// --- Board 관련 ---
export interface Post {
  id: number;
  title: string;
  content: string;
  author: string;
  category: string;
  createdAt: string;
}

export interface ListQueryParams {
  page?: number;
  limit?: number;
  search?: string;
  category?: string;
  [key: string]: string | number | boolean | undefined;
}

// API 엔드포인트 관리
export const API_ENDPOINTS = {
  auth: {
    signup: "/auth/signup",
    login: "/auth/signin",
    refresh: "/auth/refresh",
  },
  board: {
    list: "/posts",
    detail: (id: string | number) => `/posts/${id}`,
    create: "/posts",
    update: (id: string | number) => `/posts/${id}`,
    delete: (id: string | number) => `/posts/${id}`,
    categories: "/posts/categories",
  },
} as const;
