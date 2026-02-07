/**
 * Environment variables validation and type-safe access
 * 환경 변수 검증 및 타입 안전 접근
 */

const getEnvVar = (key: string, defaultValue?: string): string => {
  const value = process.env[key] || defaultValue;

  if (value === undefined) {
    throw new Error(`Environment variable ${key} is not defined`);
  }

  return value;
};

export const env = {
  // API Configuration
  apiUrl: getEnvVar('NEXT_PUBLIC_API_URL', 'http://localhost:3000/api'),
  apiTimeout: parseInt(getEnvVar('NEXT_PUBLIC_API_TIMEOUT', '30000')),

  // Authentication
  authProvider: process.env.NEXT_PUBLIC_AUTH_PROVIDER,
  nextAuthSecret: process.env.NEXTAUTH_SECRET,
  nextAuthUrl: getEnvVar('NEXTAUTH_URL', 'http://localhost:3000'),

  // Database
  databaseUrl: process.env.DATABASE_URL,

  // External Services
  sentryDsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  gaId: process.env.NEXT_PUBLIC_GA_ID,

  // Feature Flags
  enableAnalytics: process.env.NEXT_PUBLIC_ENABLE_ANALYTICS === 'true',
  enableErrorReporting:
    process.env.NEXT_PUBLIC_ENABLE_ERROR_REPORTING === 'true',

  // App Configuration
  appName: getEnvVar('NEXT_PUBLIC_APP_NAME', 'Daeya Setting'),
  appVersion: getEnvVar('NEXT_PUBLIC_APP_VERSION', '0.1.0'),
  nodeEnv: getEnvVar('NODE_ENV', 'development'),
  isDevelopment: process.env.NODE_ENV === 'development',
  isProduction: process.env.NODE_ENV === 'production',
  isTest: process.env.NODE_ENV === 'test',
} as const;

// Type export for use in other files
export type Env = typeof env;
