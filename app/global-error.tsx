'use client';

import { useEffect } from 'react';

interface GlobalErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Global Application Error:', error);
  }, [error]);

  return (
    <html>
      <body>
        <div
          style={{
            display: 'flex',
            minHeight: '100vh',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1rem',
          }}
        >
          <div
            style={{
              width: '100%',
              maxWidth: '28rem',
              textAlign: 'center',
            }}
          >
            <h1
              style={{
                fontSize: '2.25rem',
                fontWeight: 'bold',
                marginBottom: '1rem',
              }}
            >
              심각한 오류가 발생했습니다
            </h1>
            <p
              style={{
                color: '#666',
                marginBottom: '2rem',
              }}
            >
              애플리케이션을 로드하는 중 문제가 발생했습니다
            </p>

            {process.env.NODE_ENV === 'development' && (
              <div
                style={{
                  border: '1px solid #ef4444',
                  backgroundColor: '#fef2f2',
                  padding: '1rem',
                  borderRadius: '0.5rem',
                  marginBottom: '2rem',
                  textAlign: 'left',
                }}
              >
                <p
                  style={{
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    color: '#dc2626',
                  }}
                >
                  개발 모드 에러 정보:
                </p>
                <pre
                  style={{
                    marginTop: '0.5rem',
                    overflow: 'auto',
                    fontSize: '0.75rem',
                    color: '#dc2626',
                  }}
                >
                  {error.message}
                </pre>
                {error.digest && (
                  <p
                    style={{
                      marginTop: '0.5rem',
                      fontSize: '0.75rem',
                      color: '#999',
                    }}
                  >
                    Digest: {error.digest}
                  </p>
                )}
              </div>
            )}

            <div
              style={{
                display: 'flex',
                gap: '1rem',
                justifyContent: 'center',
              }}
            >
              <button
                onClick={reset}
                style={{
                  padding: '0.5rem 1.5rem',
                  backgroundColor: '#000',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '0.375rem',
                  cursor: 'pointer',
                  fontSize: '0.875rem',
                }}
              >
                다시 시도
              </button>
              <button
                onClick={() => (window.location.href = '/')}
                style={{
                  padding: '0.5rem 1.5rem',
                  backgroundColor: '#fff',
                  color: '#000',
                  border: '1px solid #ddd',
                  borderRadius: '0.375rem',
                  cursor: 'pointer',
                  fontSize: '0.875rem',
                }}
              >
                홈으로 이동
              </button>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
