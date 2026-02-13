/**
 * Authentication hook
 * 인증 상태 관리 훅
 */

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { apiClient } from '@/shared/api/client';

export function useAuthCheck() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem('accessToken');

      if (!token) {
        router.push('/login');
        return;
      }

      apiClient.setAuthToken(token);
      setIsAuthenticated(true);
      setIsLoading(false);
    };

    checkAuth();
  }, [router]);

  return { isAuthenticated, isLoading };
}

export function useRequireAuth() {
  const { isAuthenticated, isLoading } = useAuthCheck();

  if (isLoading) {
    return { isLoading: true, isAuthenticated: false };
  }

  if (!isAuthenticated) {
    return { isLoading: false, isAuthenticated: false };
  }

  return { isLoading: false, isAuthenticated: true };
}
