'use client';

import { useEffect } from 'react';
import { Button } from '@/shared/ui/Button';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Application Error:', error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4">
      <div className="w-full max-w-md space-y-8 text-center">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold">오류가 발생했습니다</h1>
          <p className="text-muted-foreground">
            예상치 못한 문제가 발생했습니다
          </p>
        </div>

        {process.env.NODE_ENV === 'development' && (
          <div className="border-destructive/50 bg-destructive/10 rounded-lg border p-4 text-left">
            <p className="text-destructive text-sm font-medium">
              개발 모드 에러 정보:
            </p>
            <pre className="text-destructive mt-2 overflow-auto text-xs">
              {error.message}
            </pre>
            {error.digest && (
              <p className="text-muted-foreground mt-2 text-xs">
                Digest: {error.digest}
              </p>
            )}
          </div>
        )}

        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Button onClick={reset} variant="default">
            다시 시도
          </Button>
          <Button
            onClick={() => (window.location.href = '/')}
            variant="outline"
          >
            홈으로 이동
          </Button>
        </div>
      </div>
    </div>
  );
}
