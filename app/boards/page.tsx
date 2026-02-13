'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useBoardList, useBoardCategories } from '@/shared/api/hooks/useBoard';
import { Button } from '@/shared/ui/Button';
import { Card } from '@/shared/ui/Card';
import { EmptyState } from '@/shared/ui/EmptyState';
import { Skeleton } from '@/shared/ui/Skeleton';
import type { BoardCategory } from '@/shared/types';

export default function BoardsPage() {
  const router = useRouter();
  const [page, setPage] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState<
    BoardCategory | 'ALL'
  >('ALL');
  const size = 10;

  const { data: boardList, isLoading } = useBoardList(page, size);
  const { data: categories } = useBoardCategories();

  const filteredContent = boardList?.content.filter(
    (board) => selectedCategory === 'ALL' || board.category === selectedCategory
  );

  const handleCategoryChange = (category: BoardCategory | 'ALL') => {
    setSelectedCategory(category);
    setPage(0);
  };

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 space-y-4">
          <Skeleton height={40} width="40%" />
          <Skeleton height={20} width="60%" />
        </div>
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <Skeleton key={i} height={100} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">게시판</h1>
          <p className="text-muted-foreground mt-2">
            자유롭게 글을 작성하고 공유하세요
          </p>
        </div>
        <Button asChild>
          <Link href="/boards/new">글쓰기</Link>
        </Button>
      </div>

      {/* Category Filter */}
      <div className="mb-6 flex flex-wrap gap-2">
        <Button
          variant={selectedCategory === 'ALL' ? 'default' : 'outline'}
          onClick={() => handleCategoryChange('ALL')}
        >
          전체
        </Button>
        {categories &&
          Object.entries(categories).map(([key, value]) => (
            <Button
              key={key}
              variant={selectedCategory === key ? 'default' : 'outline'}
              onClick={() => handleCategoryChange(key as BoardCategory)}
            >
              {value}
            </Button>
          ))}
      </div>

      {/* Board List */}
      {filteredContent && filteredContent.length > 0 ? (
        <div className="space-y-4">
          {filteredContent.map((board) => (
            <Card
              key={board.id}
              className="cursor-pointer p-6 transition-shadow hover:shadow-md"
              onClick={() => router.push(`/boards/${board.id}`)}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="mb-2 flex items-center gap-2">
                    <span className="bg-primary/10 text-primary rounded-full px-3 py-1 text-xs font-medium">
                      {categories?.[board.category] || board.category}
                    </span>
                  </div>
                  <h2 className="mb-2 text-xl font-semibold">{board.title}</h2>
                  <p className="text-muted-foreground text-sm">
                    {new Date(board.createdAt).toLocaleDateString('ko-KR', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      ) : (
        <EmptyState
          title="게시글이 없습니다"
          description="첫 번째 게시글을 작성해보세요"
          action={{
            label: '글쓰기',
            onClick: () => router.push('/boards/new'),
          }}
        />
      )}

      {/* Pagination */}
      {boardList && boardList.totalPages > 1 && (
        <div className="mt-8 flex items-center justify-center gap-2">
          <Button
            variant="outline"
            onClick={() => setPage((p) => Math.max(0, p - 1))}
            disabled={page === 0}
          >
            이전
          </Button>
          <span className="text-muted-foreground text-sm">
            {page + 1} / {boardList.totalPages}
          </span>
          <Button
            variant="outline"
            onClick={() => setPage((p) => p + 1)}
            disabled={page >= boardList.totalPages - 1}
          >
            다음
          </Button>
        </div>
      )}
    </div>
  );
}
