/**
 * Board domain types
 * 게시판 도메인 타입
 */

import type { BaseEntity, PaginatedResponse } from './common';

export type BoardCategory = 'NOTICE' | 'FREE' | 'QNA' | 'ETC';

export interface BoardCategoryMap {
  NOTICE: string;
  FREE: string;
  QNA: string;
  ETC: string;
}

export interface Board extends BaseEntity {
  title: string;
  content: string;
  boardCategory: BoardCategory;
  imageUrl?: string;
}

export interface BoardListItem {
  id: number;
  title: string;
  category: BoardCategory;
  createdAt: string;
}

export interface BoardListResponse extends PaginatedResponse<BoardListItem> {
  totalPages: number;
  totalElements: number;
  last: boolean;
  numberOfElements: number;
  size: number;
  number: number;
  first: boolean;
  empty: boolean;
}

export interface CreateBoardInput {
  title: string;
  content: string;
  boardCategory: BoardCategory;
  imageUrl?: string;
}

export interface UpdateBoardInput {
  title?: string;
  content?: string;
  boardCategory?: BoardCategory;
  imageUrl?: string;
}
