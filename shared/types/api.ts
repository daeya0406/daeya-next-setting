/**
 * API 공통 규격
 */
export type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

/** 서버 응답 기본 포맷 */
export interface ApiResponse<T = unknown> {
  data: T;
  status: number;
  message?: string;
  success: boolean;
}

/** ApiClient 요청 설정 */
export interface RequestConfig {
  method?: HttpMethod;
  headers?: Record<string, string>;
  params?: Record<string, string | number | boolean>; // 쿼리 스트링
  body?: unknown;
  timeout?: number;
  signal?: AbortSignal;
}

/** ApiClient 초기화 옵션 */
export interface ApiClientOptions {
  baseURL: string;
  timeout?: number;
  headers?: Record<string, string>;
  interceptors?: {
    request?: RequestInterceptor[];
    response?: ResponseInterceptor[];
  };
}

export type RequestInterceptor = (
  config: RequestConfig,
) => RequestConfig | Promise<RequestConfig>;
export type ResponseInterceptor = <T = unknown>(
  response: ApiResponse<T>,
) => ApiResponse<T> | Promise<ApiResponse<T>>;

/**
 * React Query 관련 타입
 */
export interface QueryOptions {
  enabled?: boolean;
  staleTime?: number;
  cacheTime?: number;
  refetchOnWindowFocus?: boolean;
  refetchOnReconnect?: boolean;
  retry?: boolean | number;
}

export interface MutationOptions {
  onSuccess?: (data: unknown) => void;
  onError?: (error: unknown) => void;
  onSettled?: () => void;
}

/**
 * 목록 조회(Filter, Sort, Pagination) 파라미터
 */
export interface FilterParams {
  search?: string;
  status?: string;
  dateFrom?: string;
  dateTo?: string;
  [key: string]: string | number | boolean | undefined;
}

export interface SortParams {
  sortBy?: string;
  sortOrder?: "asc" | "desc";
}

export interface PaginationParams {
  page?: number;
  limit?: number;
}

/** 통합 목록 쿼리 파라미터 */
export type ListQueryParams = FilterParams & SortParams & PaginationParams;

/**
 * API 엔드포인트 관리
 */
export const API_ENDPOINTS = {
  auth: {
    login: "/auth/login",
    logout: "/auth/logout",
    refresh: "/auth/refresh",
    profile: "/auth/profile",
  },
  users: {
    list: "/users",
    detail: (id: string | number) => `/users/${id}`,
    create: "/users",
    update: (id: string | number) => `/users/${id}`,
    delete: (id: string | number) => `/users/${id}`,
  },
  pokemon: {
    detail: (name: string) => `pokemon/${name}`,
  },
} as const;
