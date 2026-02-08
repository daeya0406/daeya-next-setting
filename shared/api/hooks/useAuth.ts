// 인증 관련 API 훅들

import { useMutation, useQuery } from "@/shared/hooks/useQuery";
import { apiClient } from "@/shared/api/client";
import type {
  AuthResponse,
  LoginCredentials,
  RegisterData,
  User,
} from "@/shared/types";

// Query Keys
export const authKeys = {
  profile: ["auth", "profile"] as const,
  session: ["auth", "session"] as const,
};

/**
 * Get current user profile
 */
export function useProfile() {
  // 인자 3개를 객체 하나로 합치기
  return useQuery<User>({
    queryKey: authKeys.profile,
    queryFn: () => apiClient.get<User>("/auth/profile"),
    staleTime: 5 * 60 * 1000,
    retry: false,
  });
}

/**
 * Login mutation
 */
export function useLogin() {
  // useMutation도 객체 방식으로 변경
  return useMutation<AuthResponse, Error, LoginCredentials>({
    mutationFn: (credentials) =>
      apiClient.post<AuthResponse>("/auth/login", { body: credentials }),
    onSuccess: (data) => {
      if (data.accessToken) {
        apiClient.setAuthToken(data.accessToken);
        localStorage.setItem("accessToken", data.accessToken);
      }
    },
  });
}

/**
 * Register mutation
 */
export function useRegister() {
  return useMutation<AuthResponse, Error, RegisterData>({
    mutationFn: (data) =>
      apiClient.post<AuthResponse>("/auth/register", { body: data }),
  });
}

/**
 * Logout mutation
 */
export function useLogout() {
  return useMutation<void, Error>({
    mutationFn: () => apiClient.post<void>("/auth/logout"),
    onSuccess: () => {
      apiClient.clearAuthToken();
      localStorage.removeItem("accessToken");
    },
  });
}
