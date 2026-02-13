'use client';

import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  useCreateBoard,
  useBoardCategories,
} from '@/shared/api/hooks/useBoard';
import { Button } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';
import { Card } from '@/shared/ui/Card';
import { toast } from '@/shared/ui/Toast';
import type { BoardCategory } from '@/shared/types';

const createBoardSchema = z.object({
  title: z
    .string()
    .min(1, '제목을 입력하세요')
    .max(100, '제목은 100자 이하여야 합니다'),
  content: z.string().min(1, '내용을 입력하세요'),
  boardCategory: z.enum(['NOTICE', 'FREE', 'QNA', 'ETC']),
  imageUrl: z.string().optional(),
});

type CreateBoardForm = z.infer<typeof createBoardSchema>;

export default function NewBoardPage() {
  const router = useRouter();
  const { mutate: createBoard, isPending } = useCreateBoard();
  const { data: categories } = useBoardCategories();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<CreateBoardForm>({
    resolver: zodResolver(createBoardSchema),
    defaultValues: {
      boardCategory: 'FREE',
    },
  });

  // eslint-disable-next-line react-hooks/incompatible-library
  const selectedCategory = watch('boardCategory');

  const onSubmit = (data: CreateBoardForm) => {
    createBoard(data, {
      onSuccess: (board) => {
        toast.success('게시글이 등록되었습니다');
        router.push(`/boards/${board.id}`);
      },
      onError: (error) => {
        toast.error(error.message || '등록에 실패했습니다');
      },
    });
  };

  return (
    <div className="container mx-auto max-w-4xl px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">글쓰기</h1>
        <p className="text-muted-foreground mt-2">새로운 게시글을 작성하세요</p>
      </div>

      <Card className="p-8">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Category */}
          <div className="space-y-2">
            <label htmlFor="category" className="text-sm font-medium">
              카테고리
            </label>
            {categories && (
              <div className="flex flex-wrap gap-2">
                {Object.entries(categories).map(([key, value]) => (
                  <Button
                    key={key}
                    type="button"
                    variant={selectedCategory === key ? 'default' : 'outline'}
                    onClick={() =>
                      setValue('boardCategory', key as BoardCategory)
                    }
                  >
                    {value}
                  </Button>
                ))}
              </div>
            )}
            {errors.boardCategory && (
              <p className="text-sm text-red-500">
                {errors.boardCategory.message}
              </p>
            )}
          </div>

          {/* Title */}
          <div className="space-y-2">
            <label htmlFor="title" className="text-sm font-medium">
              제목
            </label>
            <Input
              id="title"
              {...register('title')}
              placeholder="제목을 입력하세요"
              disabled={isPending}
            />
            {errors.title && (
              <p className="text-sm text-red-500">{errors.title.message}</p>
            )}
          </div>

          {/* Content */}
          <div className="space-y-2">
            <label htmlFor="content" className="text-sm font-medium">
              내용
            </label>
            <textarea
              id="content"
              {...register('content')}
              placeholder="내용을 입력하세요"
              disabled={isPending}
              rows={15}
              className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring w-full rounded-md border px-3 py-2 text-sm focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
            />
            {errors.content && (
              <p className="text-sm text-red-500">{errors.content.message}</p>
            )}
          </div>

          {/* Image URL (optional) */}
          <div className="space-y-2">
            <label htmlFor="imageUrl" className="text-sm font-medium">
              이미지 URL (선택)
            </label>
            <Input
              id="imageUrl"
              {...register('imageUrl')}
              placeholder="/media/images/example.png"
              disabled={isPending}
            />
            <p className="text-muted-foreground text-xs">
              서버에 업로드된 이미지 경로를 입력하세요
            </p>
          </div>

          {/* Actions */}
          <div className="flex gap-2">
            <Button type="submit" disabled={isPending}>
              {isPending ? '등록 중...' : '등록'}
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={() => router.back()}
              disabled={isPending}
            >
              취소
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
}
