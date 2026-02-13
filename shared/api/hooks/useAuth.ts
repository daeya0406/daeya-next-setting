/**
 * Authentication API hooks
 * 인증 관련 API 훅
 */

import { useMutation, useQuery } from '@/shared/hooks/useQuery';
import { apiClient } from '@/shared/api/client';
import type {
  AuthResponse,
  LoginCredentials,
  RegisterData,
  User,
} from '@/shared/types';

// Query Keys
export const authKeys = {
  profile: ['auth', 'profile'] as const,
  session: ['auth', 'session'] as const,
};

/**
 * Get current user profile
 */
export function useProfile() {
  return useQuery<User>(
    authKeys.profile,
    () => apiClient.get<User>('/auth/profile'),
    {
      staleTime: 5 * 60 * 1000, // 5 minutes
      retry: false,
    }
  );
}

/**
 * Login mutation
 */
export function useLogin() {
  return useMutation<AuthResponse, Error, LoginCredentials>(
    (credentials) => apiClient.post<AuthResponse>('/auth/login', credentials),
    {
      onSuccess: (data) => {
        // Store token
        if (data.accessToken) {
          apiClient.setAuthToken(data.accessToken);
          localStorage.setItem('accessToken', data.accessToken);
        }
      },
    }
  );
}

/**
 * Register mutation
 */
export function useRegister() {
  return useMutation<AuthResponse, Error, RegisterData>((data) =>
    apiClient.post<AuthResponse>('/auth/register', data)
  );
}

/**
 * Refresh token mutation
 */
export function useRefreshToken() {
  return useMutation<AuthResponse, Error, { refreshToken: string }>(
    (data) => apiClient.post<AuthResponse>('/auth/refresh', data),
    {
      onSuccess: (data) => {
        if (data.accessToken) {
          apiClient.setAuthToken(data.accessToken);
          localStorage.setItem('accessToken', data.accessToken);
        }
      },
    }
  );
}

/**
 * Logout mutation
 */
export function useLogout() {
  return useMutation<void, Error>(() => apiClient.post<void>('/auth/logout'), {
    onSuccess: () => {
      // Clear token
      apiClient.clearAuthToken();
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
    },
  });
}
