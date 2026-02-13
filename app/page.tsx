import Link from 'next/link';
import { Button } from '@/shared/ui/Button';
import { Card } from '@/shared/ui/Card';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex min-h-[calc(100vh-200px)] flex-col items-center justify-center text-center">
        <h1 className="mb-4 text-5xl font-bold">
          게시판에 오신 것을 환영합니다
        </h1>
        <p className="text-muted-foreground mb-8 text-xl">
          자유롭게 글을 작성하고 공유하세요
        </p>

        <div className="flex gap-4">
          <Button size="lg" asChild>
            <Link href="/boards">게시판 보기</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/login">로그인</Link>
          </Button>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          <Card className="p-6">
            <h3 className="mb-2 text-lg font-semibold">📝 글쓰기</h3>
            <p className="text-muted-foreground text-sm">
              다양한 카테고리에서 자유롭게 글을 작성할 수 있습니다
            </p>
          </Card>
          <Card className="p-6">
            <h3 className="mb-2 text-lg font-semibold">💬 소통</h3>
            <p className="text-muted-foreground text-sm">
              다른 사용자들과 의견을 나누고 소통하세요
            </p>
          </Card>
          <Card className="p-6">
            <h3 className="mb-2 text-lg font-semibold">🔍 검색</h3>
            <p className="text-muted-foreground text-sm">
              카테고리별로 원하는 글을 쉽게 찾아볼 수 있습니다
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}
