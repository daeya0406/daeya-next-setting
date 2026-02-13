'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { Button } from '@/shared/ui/Button';
import { toast } from '@/shared/ui/Toast';
import { apiClient } from '@/shared/api/client';

export function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem('accessToken');
      if (token) {
        setIsLoggedIn(true);
        apiClient.setAuthToken(token);
        // Extract username from token if needed, or fetch from API
        // For now, we'll just show "사용자"
        setUsername('사용자');
      }
    };

    checkAuth();
  }, [pathname]);

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    apiClient.clearAuthToken();
    setIsLoggedIn(false);
    setUsername('');
    toast.success('로그아웃되었습니다');
    router.push('/login');
  };

  return (
    <nav className="border-b">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-6">
          <Link href="/" className="text-xl font-bold">
            게시판
          </Link>
          <div className="flex gap-4">
            <Link
              href="/boards"
              className={`text-sm ${
                pathname === '/boards'
                  ? 'text-primary font-semibold'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              글 목록
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-4">
          {isLoggedIn ? (
            <>
              <span className="text-muted-foreground text-sm">
                {username}님
              </span>
              <Button variant="outline" size="sm" onClick={handleLogout}>
                로그아웃
              </Button>
            </>
          ) : (
            <>
              <Button variant="outline" size="sm" asChild>
                <Link href="/login">로그인</Link>
              </Button>
              <Button size="sm" asChild>
                <Link href="/register">회원가입</Link>
              </Button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
