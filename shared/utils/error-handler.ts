import { ApiError } from "@/shared/types";

/** 기본 에러 클래스 */
export class AppError extends Error {
  constructor(
    message: string,
    public code: string = "UNKNOWN_ERROR",
    public statusCode: number = 500,
    public details?: unknown,
  ) {
    super(message);
    this.name = "AppError";
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

/** 400: 입력값 검증 실패 */
export class ValidationError extends AppError {
  constructor(message: string, details?: unknown) {
    super(message, "VALIDATION_ERROR", 400, details);
  }
}

/** 401: 인증 필요 */
export class AuthenticationError extends AppError {
  constructor(message: string = "인증이 필요합니다") {
    super(message, "AUTHENTICATION_ERROR", 401);
  }
}

/** 403: 권한 없음 */
export class AuthorizationError extends AppError {
  constructor(message: string = "권한이 없습니다") {
    super(message, "AUTHORIZATION_ERROR", 403);
  }
}

/** 404: 리소스 없음 */
export class NotFoundError extends AppError {
  constructor(message: string = "요청한 리소스를 찾을 수 없습니다") {
    super(message, "NOT_FOUND", 404);
  }
}

/** 에러 객체 표준화 */
export function normalizeError(error: unknown): AppError {
  if (error instanceof AppError) return error;
  if (error instanceof Error) return new AppError(error.message);
  return new AppError("알 수 없는 오류가 발생했습니다");
}

/** 에러 로그 기록  */
export function logError(error: unknown, context?: string): void {
  const err = normalizeError(error);
  if (process.env.NODE_ENV === "development") {
    console.error(`[Error - ${context || "Global"}]:`, err);
  }
}

/** 응답 코드별 에러 객체 생성 */
export function handleApiError(response: Response): AppError {
  const status = response.status;
  switch (status) {
    case 400:
      return new ValidationError("잘못된 요청입니다");
    case 401:
      return new AuthenticationError();
    case 403:
      return new AuthorizationError();
    case 404:
      return new NotFoundError();
    default:
      return new AppError("서버 오류가 발생했습니다", "API_ERROR", status);
  }
}
