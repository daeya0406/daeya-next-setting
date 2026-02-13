/**
 * Board API hooks
 * 게시판 관련 API 훅
 */

import { useMutation, useQuery } from '@/shared/hooks/useQuery';
import { useQueryClient } from '@tanstack/react-query';
import { apiClient } from '@/shared/api/client';
import type {
  Board,
  BoardListResponse,
  CreateBoardInput,
  UpdateBoardInput,
  BoardCategoryMap,
} from '@/shared/types';

// Query Keys
export const boardKeys = {
  all: ['boards'] as const,
  lists: () => [...boardKeys.all, 'list'] as const,
  list: (page: number, size: number) =>
    [...boardKeys.lists(), { page, size }] as const,
  detail: (id: number) => [...boardKeys.all, 'detail', id] as const,
  categories: ['boards', 'categories'] as const,
};

/**
 * Get board categories
 */
export function useBoardCategories() {
  return useQuery<BoardCategoryMap>(
    boardKeys.categories,
    () => apiClient.get<BoardCategoryMap>('/boards/categories'),
    {
      staleTime: 10 * 60 * 1000, // 10 minutes
    }
  );
}

/**
 * Get board list with pagination
 */
export function useBoardList(page: number = 0, size: number = 10) {
  return useQuery<BoardListResponse>(
    boardKeys.list(page, size),
    () =>
      apiClient.get<BoardListResponse>('/boards', {
        params: { page, size },
      }),
    {
      staleTime: 60 * 1000, // 1 minute
      keepPreviousData: true,
    }
  );
}

/**
 * Get board detail
 */
export function useBoardDetail(id: number) {
  return useQuery<Board>(
    boardKeys.detail(id),
    () => apiClient.get<Board>(`/boards/${id}`),
    {
      enabled: !!id,
      staleTime: 60 * 1000, // 1 minute
    }
  );
}

/**
 * Create board mutation
 */
export function useCreateBoard() {
  const queryClient = useQueryClient();

  return useMutation<Board, Error, CreateBoardInput>(
    (data) => apiClient.post<Board>('/boards', data),
    {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: boardKeys.lists() });
      },
    }
  );
}

/**
 * Update board mutation
 */
export function useUpdateBoard(id: number) {
  const queryClient = useQueryClient();

  return useMutation<Board, Error, UpdateBoardInput>(
    (data) => apiClient.patch<Board>(`/boards/${id}`, data),
    {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: boardKeys.detail(id) });
        queryClient.invalidateQueries({ queryKey: boardKeys.lists() });
      },
    }
  );
}

/**
 * Delete board mutation
 */
export function useDeleteBoard() {
  const queryClient = useQueryClient();

  return useMutation<void, Error, number>(
    (id) => apiClient.delete<void>(`/boards/${id}`),
    {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: boardKeys.lists() });
      },
    }
  );
}
