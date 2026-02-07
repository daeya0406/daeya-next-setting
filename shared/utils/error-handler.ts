/**
 * Error handling utilities
 * 에러 핸들링 유틸리티
 */

import type { ApiError } from '@/shared/types';

export class AppError extends Error {
  constructor(
    message: string,
    public code: string = 'UNKNOWN_ERROR',
    public statusCode: number = 500,
    public details?: unknown
  ) {
    super(message);
    this.name = 'AppError';
    Object.setPrototypeOf(this, AppError.prototype);
  }

  toJSON(): ApiError {
    return {
      code: this.code,
      message: this.message,
      statusCode: this.statusCode,
      details: this.details,
    };
  }
}

export class ValidationError extends AppError {
  constructor(message: string, details?: unknown) {
    super(message, 'VALIDATION_ERROR', 400, details);
    this.name = 'ValidationError';
  }
}

export class AuthenticationError extends AppError {
  constructor(message: string = '인증이 필요합니다') {
    super(message, 'AUTHENTICATION_ERROR', 401);
    this.name = 'AuthenticationError';
  }
}

export class AuthorizationError extends AppError {
  constructor(message: string = '권한이 없습니다') {
    super(message, 'AUTHORIZATION_ERROR', 403);
    this.name = 'AuthorizationError';
  }
}

export class NotFoundError extends AppError {
  constructor(message: string = '요청한 리소스를 찾을 수 없습니다') {
    super(message, 'NOT_FOUND', 404);
    this.name = 'NotFoundError';
  }
}

export class NetworkError extends AppError {
  constructor(message: string = '네트워크 오류가 발생했습니다') {
    super(message, 'NETWORK_ERROR', 0);
    this.name = 'NetworkError';
  }
}

/**
 * Convert unknown error to AppError
 */
export function normalizeError(error: unknown): AppError {
  if (error instanceof AppError) {
    return error;
  }

  if (error instanceof Error) {
    return new AppError(error.message, 'UNKNOWN_ERROR', 500);
  }

  if (typeof error === 'string') {
    return new AppError(error, 'UNKNOWN_ERROR', 500);
  }

  return new AppError('알 수 없는 오류가 발생했습니다', 'UNKNOWN_ERROR', 500);
}

/**
 * Get user-friendly error message
 */
export function getErrorMessage(error: unknown): string {
  const normalizedError = normalizeError(error);
  return normalizedError.message;
}

/**
 * Check if error is specific type
 */
export function isAuthError(error: unknown): boolean {
  return (
    error instanceof AuthenticationError || error instanceof AuthorizationError
  );
}

export function isValidationError(error: unknown): boolean {
  return error instanceof ValidationError;
}

export function isNetworkError(error: unknown): boolean {
  return error instanceof NetworkError;
}

/**
 * Log error to console (development) or error tracking service (production)
 */
export function logError(error: unknown, context?: string): void {
  const normalizedError = normalizeError(error);

  if (process.env.NODE_ENV === 'development') {
    console.error(`[Error${context ? ` - ${context}` : ''}]:`, {
      message: normalizedError.message,
      code: normalizedError.code,
      statusCode: normalizedError.statusCode,
      details: normalizedError.details,
      stack: normalizedError.stack,
    });
  } else {
    // In production, send to error tracking service (e.g., Sentry)
    // Sentry.captureException(normalizedError, { contexts: { custom: { context } } });
    console.error(normalizedError);
  }
}

/**
 * Handle API response errors
 */
export function handleApiError(response: Response): AppError {
  const statusCode = response.status;

  switch (statusCode) {
    case 400:
      return new ValidationError('잘못된 요청입니다');
    case 401:
      return new AuthenticationError();
    case 403:
      return new AuthorizationError();
    case 404:
      return new NotFoundError();
    case 500:
      return new AppError('서버 오류가 발생했습니다', 'SERVER_ERROR', 500);
    default:
      return new AppError(
        `요청 처리 중 오류가 발생했습니다 (${statusCode})`,
        'API_ERROR',
        statusCode
      );
  }
}
