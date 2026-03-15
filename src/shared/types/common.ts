/**
 * Common types used across the application
 * 애플리케이션 전역에서 사용되는 공통 타입
 */

// API Response Types
export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: ApiError;
  message?: string;
}

export interface ApiError {
  code: string;
  message: string;
  details?: unknown;
  statusCode?: number;
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: Pagination;
}

export interface Pagination {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
  hasNext: boolean;
  hasPrev: boolean;
}

// Loading & Error States
export type LoadingState = 'idle' | 'loading' | 'success' | 'error';

export interface AsyncState<T = unknown> {
  data: T | null;
  loading: boolean;
  error: ApiError | null;
  status: LoadingState;
}

// Form Types
export interface FormFieldError {
  field: string;
  message: string;
}

export interface FormState<T = unknown> {
  values: T;
  errors: Record<string, string>;
  touched: Record<string, boolean>;
  isSubmitting: boolean;
  isValid: boolean;
}

// Utility Types
export type Nullable<T> = T | null;
export type Optional<T> = T | undefined;
export type Maybe<T> = T | null | undefined;

export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

export type StringKeys<T> = Extract<keyof T, string>;

// ID Types
export type ID = string | number;
export type UUID = string;

// Date Types
export type ISODateString = string;
export type Timestamp = number;

// Generic CRUD Types
export interface BaseEntity {
  id: ID;
  createdAt: ISODateString;
  updatedAt: ISODateString;
}

export type CreateInput<T> = Omit<T, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateInput<T> = Partial<CreateInput<T>>;

// Route Types
export type RouteParams = Record<string, string | string[]>;
export type SearchParams = Record<string, string | string[] | undefined>;

export interface PageProps<
  TParams extends RouteParams = RouteParams,
  TSearchParams extends SearchParams = SearchParams,
> {
  params: Promise<TParams>;
  searchParams: Promise<TSearchParams>;
}

// Component Props Helpers
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export type PropsWithClassName<P = {}> = P & {
  className?: string;
};

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export type PropsWithChildren<P = {}> = P & {
  children?: React.ReactNode;
};

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export type PropsWithChildrenAndClassName<P = {}> = PropsWithChildren<P> & {
  className?: string;
};
