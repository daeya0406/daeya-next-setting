'use client';

import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation'; // 경로 확인을 위해 usePathname 추가
import Cookies from 'js-cookie';

export function useAuthCheck() {
  const router = useRouter();
  const pathname = usePathname(); // 현재 주소 가져오기
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAuth = () => {
      // 1. 로컬스토리지 대신 쿠키에서 토큰 확인!
      const token = Cookies.get('accessToken');

      const isPublicPage = pathname === '/login' || pathname === '/register';

      if (!token) {
        setIsAuthenticated(false);
        setIsLoading(false);

        // 2. 토큰이 없는데 보호된 페이지라면 로그인으로 보냄
        if (!isPublicPage) {
          router.push('/login');
        }
        return;
      }

      // 3. 토큰이 있으면 인증 완료
      setIsAuthenticated(true);
      setIsLoading(false);

      // 4. 이미 로그인했는데 로그인 페이지 가려고 하면 게시판으로 보냄
      if (isPublicPage) {
        router.push('/boards');
      }
    };

    checkAuth();
  }, [router, pathname]);

  return { isAuthenticated, isLoading };
}

export function useRequireAuth() {
  const { isAuthenticated, isLoading } = useAuthCheck();
  return { isLoading, isAuthenticated };
}
