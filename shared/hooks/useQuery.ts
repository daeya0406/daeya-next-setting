/**
 * Custom hooks for React Query with type safety
 * React Query를 위한 타입 안전 커스텀 훅
 */

import {
  useQuery as useReactQuery,
  useMutation as useReactMutation,
  type UseQueryOptions,
  type UseMutationOptions,
  type QueryKey,
} from '@tanstack/react-query';
// Removed unused import

/**
 * Typed useQuery hook
 */
export function useQuery<TData = unknown, TError = Error>(
  queryKey: QueryKey,
  queryFn: () => Promise<TData>,
  options?: Omit<UseQueryOptions<TData, TError>, 'queryKey' | 'queryFn'>
) {
  return useReactQuery<TData, TError>({
    queryKey,
    queryFn,
    ...options,
  });
}

/**
 * Typed useMutation hook
 */
export function useMutation<
  TData = unknown,
  TError = Error,
  TVariables = void,
  TContext = unknown,
>(
  mutationFn: (variables: TVariables) => Promise<TData>,
  options?: UseMutationOptions<TData, TError, TVariables, TContext>
) {
  return useReactMutation<TData, TError, TVariables, TContext>({
    mutationFn,
    ...options,
  });
}
