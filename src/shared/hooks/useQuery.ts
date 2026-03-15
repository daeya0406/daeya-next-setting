import {
  useQuery as useReactQuery,
  useMutation as useReactMutation,
  type UseQueryOptions,
  type UseMutationOptions,
} from "@tanstack/react-query";

// 최신 React Query 표준(v5)에 맞춘 객체 인자 방식
export function useQuery<TData = unknown, TError = Error>(
  options: UseQueryOptions<TData, TError>,
) {
  // 여기에 로깅이나 전역 에러 핸들링을 추가 가능
  return useReactQuery<TData, TError>(options);
}

export function useMutation<
  TData = unknown,
  TError = Error,
  TVariables = void,
  TContext = unknown,
>(options: UseMutationOptions<TData, TError, TVariables, TContext>) {
  return useReactMutation<TData, TError, TVariables, TContext>(options);
}
