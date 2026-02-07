import type { RequestConfig } from '@/shared/types';
import {
  AppError,
  handleApiError,
  logError,
} from '@/shared/utils/error-handler';
import { env } from '@/lib/env';

class ApiClient {
  private baseURL: string;
  private timeout: number;
  private defaultHeaders: Record<string, string>;

  constructor() {
    this.baseURL = env.apiUrl;
    this.timeout = env.apiTimeout;
    this.defaultHeaders = {
      'Content-Type': 'application/json',
    };
  }

  private async request<T = unknown>(
    endpoint: string,
    config: RequestConfig = {}
  ): Promise<T> {
    const {
      method = 'GET',
      headers = {},
      body,
      params,
      timeout = this.timeout,
      signal,
    } = config;

    // Build URL with query parameters
    const url = new URL(endpoint, this.baseURL);
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        url.searchParams.append(key, String(value));
      });
    }

    // Create abort controller for timeout
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeout);

    try {
      const response = await fetch(url.toString(), {
        method,
        headers: {
          ...this.defaultHeaders,
          ...headers,
        },
        body: body ? JSON.stringify(body) : undefined,
        signal: signal || controller.signal,
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        const error = handleApiError(response);
        logError(error, `API Request: ${method} ${endpoint}`);
        throw error;
      }

      const data = await response.json();
      return data as T;
    } catch (error) {
      clearTimeout(timeoutId);

      if (error instanceof AppError) {
        throw error;
      }

      // Handle network errors
      if (error instanceof Error) {
        if (error.name === 'AbortError') {
          const timeoutError = new AppError(
            '요청 시간이 초과되었습니다',
            'TIMEOUT_ERROR',
            408
          );
          logError(timeoutError, `API Request: ${method} ${endpoint}`);
          throw timeoutError;
        }

        const networkError = new AppError(
          '네트워크 오류가 발생했습니다',
          'NETWORK_ERROR',
          0
        );
        logError(networkError, `API Request: ${method} ${endpoint}`);
        throw networkError;
      }

      throw error;
    }
  }

  async get<T = unknown>(
    endpoint: string,
    config?: Omit<RequestConfig, 'method' | 'body'>
  ): Promise<T> {
    return this.request<T>(endpoint, { ...config, method: 'GET' });
  }

  async post<T = unknown>(
    endpoint: string,
    body?: unknown,
    config?: Omit<RequestConfig, 'method' | 'body'>
  ): Promise<T> {
    return this.request<T>(endpoint, { ...config, method: 'POST', body });
  }

  async put<T = unknown>(
    endpoint: string,
    body?: unknown,
    config?: Omit<RequestConfig, 'method' | 'body'>
  ): Promise<T> {
    return this.request<T>(endpoint, { ...config, method: 'PUT', body });
  }

  async patch<T = unknown>(
    endpoint: string,
    body?: unknown,
    config?: Omit<RequestConfig, 'method' | 'body'>
  ): Promise<T> {
    return this.request<T>(endpoint, { ...config, method: 'PATCH', body });
  }

  async delete<T = unknown>(
    endpoint: string,
    config?: Omit<RequestConfig, 'method' | 'body'>
  ): Promise<T> {
    return this.request<T>(endpoint, { ...config, method: 'DELETE' });
  }

  // Set authorization token
  setAuthToken(token: string) {
    this.defaultHeaders['Authorization'] = `Bearer ${token}`;
  }

  // Clear authorization token
  clearAuthToken() {
    delete this.defaultHeaders['Authorization'];
  }
}

// Export singleton instance
export const apiClient = new ApiClient();

// Legacy export for backward compatibility
export const fetchClient = async (url: string, options: RequestInit) => {
  const res = await fetch(`${env.apiUrl}${url}`, options);
  if (!res.ok) throw new Error('API Error');
  return res.json();
};
