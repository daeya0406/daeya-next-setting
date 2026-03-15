"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { paginationStyles } from "./Pagination.styles";

interface PaginationProps {
  currentPage: number;
  totalCount: number;
  pageSize?: number;
  groupSize?: number;
  onPageChange: (page: number) => void;
}

export function Pagination({
  currentPage,
  totalCount,
  pageSize = 10,
  groupSize = 5,
  onPageChange,
}: PaginationProps) {
  const styles = paginationStyles();

  // 1. 전체 페이지 수 계산
  const totalPages = Math.ceil(totalCount / pageSize);

  // 2. 현재 페이지가 속한 그룹 계산 (예: 1~5페이지는 1그룹, 6~10페이지는 2그룹)
  const currentGroup = Math.ceil(currentPage / groupSize);

  // 3. 현재 그룹의 시작과 끝 번호 계산
  const startPage = (currentGroup - 1) * groupSize + 1;
  const endPage = Math.min(startPage + groupSize - 1, totalPages);

  // 4. 화면에 노출할 숫자 배열 생성
  const pages = Array.from(
    { length: Math.max(0, endPage - startPage + 1) },
    (_, i) => startPage + i,
  );

  // 데이터가 없거나 1페이지뿐이면 렌더링 생략
  if (totalPages <= 1) return null;

  return (
    <nav className={styles.base()}>
      {/* 이전 그룹 점프: 현재 그룹의 시작 번호보다 하나 작은 페이지로 이동 */}
      <button
        type="button"
        onClick={() => {
          const prevGroupLastPage = startPage - 1;
          onPageChange(Math.max(1, prevGroupLastPage));
        }}
        disabled={startPage === 1} // 첫 번째 그룹이면 이전 그룹이 없음
        className={styles.button({ class: styles.arrow() })}
      >
        <ChevronLeft size={18} />
      </button>

      {/* 현재 그룹 내 숫자 버튼들 */}
      {pages.map((p) => (
        <button
          key={p}
          type="button"
          onClick={() => onPageChange(p)}
          className={styles.button({
            isActive: currentPage === p,
            class: styles.page(),
          })}
        >
          {p}
        </button>
      ))}

      {/* 다음 그룹 점프: 현재 그룹의 마지막 번호보다 하나 큰 페이지로 이동 */}
      <button
        type="button"
        onClick={() => {
          const nextGroupFirstPage = endPage + 1;
          onPageChange(Math.min(totalPages, nextGroupFirstPage));
        }}
        disabled={endPage === totalPages} // 마지막 그룹이면 다음 그룹이 없음
        className={styles.button({ class: styles.arrow() })}
      >
        <ChevronRight size={18} />
      </button>
    </nav>
  );
}
