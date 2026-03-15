/// 환경 변수 검증 및 타입 안전 접근 설정

/**
 * 환경 변수를 가져오거나 기본값을 반환하는 헬퍼 함수
 * @param key 환경 변수 키
 * @param defaultValue 값이 없을 경우 사용할 기본값
 */
const getEnvVar = (key: string, defaultValue?: string): string => {
  const value = process.env[key] || defaultValue;

  if (value === undefined) {
    throw new Error(`환경 변수 ${key}가 정의되지 않았습니다.`);
  }

  return value;
};

export const env = {
  // API 설정
  apiUrl: process.env.NEXT_PUBLIC_API_URL,
  apiTimeout: parseInt(getEnvVar("NEXT_PUBLIC_API_TIMEOUT", "30000")),

  // 인증 관련
  authProvider: process.env.NEXT_PUBLIC_AUTH_PROVIDER,
  nextAuthSecret: process.env.NEXTAUTH_SECRET,
  nextAuthUrl: getEnvVar("NEXTAUTH_URL", "http://localhost:3000"),

  // 데이터베이스
  databaseUrl: process.env.DATABASE_URL,

  // 외부 서비스 (Sentry, Google Analytics 등)
  sentryDsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  gaId: process.env.NEXT_PUBLIC_GA_ID,

  // 기능 플래그 (특정 기능 활성화 여부)
  enableAnalytics: process.env.NEXT_PUBLIC_ENABLE_ANALYTICS === "true",
  enableErrorReporting:
    process.env.NEXT_PUBLIC_ENABLE_ERROR_REPORTING === "true",

  // 앱 기본 정보
  appName: getEnvVar("NEXT_PUBLIC_APP_NAME", "Daeya Setting"),
  appVersion: getEnvVar("NEXT_PUBLIC_APP_VERSION", "0.1.0"),
  nodeEnv: getEnvVar("NODE_ENV", "development"),

  // 환경 확인 유틸리티
  isDevelopment: process.env.NODE_ENV === "development",
  isProduction: process.env.NODE_ENV === "production",
  isTest: process.env.NODE_ENV === "test",
} as const;

// 다른 파일에서 타입 참조가 필요할 때 사용
export type Env = typeof env;
