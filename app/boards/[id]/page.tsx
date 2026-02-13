'use client';

import { use } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import {
  useBoardDetail,
  useDeleteBoard,
  useBoardCategories,
} from '@/shared/api/hooks/useBoard';
import { Button } from '@/shared/ui/Button';
import { Card } from '@/shared/ui/Card';
import { Spinner } from '@/shared/ui/Spinner';
import { toast } from '@/shared/ui/Toast';
import { Skeleton } from '@/shared/ui/Skeleton';

interface BoardDetailPageProps {
  params: Promise<{ id: string }>;
}

export default function BoardDetailPage({ params }: BoardDetailPageProps) {
  const { id } = use(params);
  const router = useRouter();
  const boardId = parseInt(id);

  const { data: board, isLoading } = useBoardDetail(boardId);
  const { data: categories } = useBoardCategories();
  const { mutate: deleteBoard, isPending: isDeleting } = useDeleteBoard();

  const handleDelete = () => {
    if (!confirm('정말 삭제하시겠습니까?')) return;

    deleteBoard(boardId, {
      onSuccess: () => {
        toast.success('게시글이 삭제되었습니다');
        router.push('/boards');
      },
      onError: (error) => {
        toast.error(error.message || '삭제에 실패했습니다');
      },
    });
  };

  if (isLoading) {
    return (
      <div className="container mx-auto max-w-4xl px-4 py-8">
        <Skeleton height={40} width="60%" className="mb-4" />
        <Skeleton height={20} width="40%" className="mb-8" />
        <Skeleton height={200} />
      </div>
    );
  }

  if (!board) {
    return (
      <div className="container mx-auto max-w-4xl px-4 py-8">
        <Card className="p-8 text-center">
          <h2 className="text-xl font-semibold">게시글을 찾을 수 없습니다</h2>
          <Button asChild className="mt-4">
            <Link href="/boards">목록으로</Link>
          </Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto max-w-4xl px-4 py-8">
      {/* Back Button */}
      <Button variant="outline" asChild className="mb-4">
        <Link href="/boards">← 목록으로</Link>
      </Button>

      <Card className="p-8">
        {/* Header */}
        <div className="mb-6 border-b pb-6">
          <div className="mb-3 flex items-center gap-2">
            <span className="bg-primary/10 text-primary rounded-full px-3 py-1 text-sm font-medium">
              {categories?.[board.boardCategory] || board.boardCategory}
            </span>
          </div>
          <h1 className="mb-4 text-3xl font-bold">{board.title}</h1>
          <p className="text-muted-foreground text-sm">
            {new Date(board.createdAt).toLocaleDateString('ko-KR', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit',
            })}
          </p>
        </div>

        {/* Image */}
        {board.imageUrl && (
          <div className="mb-6">
            <Image
              src={`https://front-mission.bigs.or.kr${board.imageUrl}`}
              alt={board.title}
              width={800}
              height={400}
              className="rounded-lg object-cover"
            />
          </div>
        )}

        {/* Content */}
        <div className="prose prose-slate max-w-none">
          <div className="whitespace-pre-wrap">{board.content}</div>
        </div>

        {/* Actions */}
        <div className="mt-8 flex gap-2 border-t pt-6">
          <Button variant="outline" asChild>
            <Link href={`/boards/${board.id}/edit`}>수정</Link>
          </Button>
          <Button
            variant="outline"
            onClick={handleDelete}
            disabled={isDeleting}
          >
            {isDeleting ? <Spinner size="sm" /> : '삭제'}
          </Button>
        </div>
      </Card>
    </div>
  );
}
