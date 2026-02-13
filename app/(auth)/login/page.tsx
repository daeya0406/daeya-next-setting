'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useLogin } from '@/shared/api/hooks/useAuth';
import { Button } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';
import { Card } from '@/shared/ui/Card';
import { toast } from '@/shared/ui/Toast';

const loginSchema = z.object({
  username: z.string().min(1, '아이디를 입력하세요'),
  password: z.string().min(1, '비밀번호를 입력하세요'),
});

type LoginForm = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const router = useRouter();
  const { mutate: login, isPending } = useLogin();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginForm) => {
    login(data, {
      onSuccess: () => {
        // ✅ [수정] 저장은 이미 useLogin 훅 내부에서 처리하므로,
        // 여기서는 성공 메시지와 페이지 이동만 관리합니다.
        toast.success('로그인되었습니다');
        router.push('/boards');
      },
      onError: (error) => {
        toast.error(error.message || '로그인에 실패했습니다');
      },
    });
  };

  return (
    <div className="flex min-h-screen items-center justify-center px-4 py-12">
      <Card className="w-full max-w-md space-y-6 p-8">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">로그인</h1>
          <p className="text-muted-foreground">계정에 로그인하세요</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="username" className="text-sm font-medium">
              아이디
            </label>
            <Input
              id="username"
              {...register('username')}
              placeholder="아이디를 입력하세요"
              disabled={isPending}
              autoComplete="username"
            />
            {errors.username && (
              <p className="text-sm text-red-500">{errors.username.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <label htmlFor="password" className="text-sm font-medium">
              비밀번호
            </label>
            <Input
              id="password"
              type="password"
              {...register('password')}
              placeholder="비밀번호를 입력하세요"
              disabled={isPending}
              autoComplete="current-password"
            />
            {errors.password && (
              <p className="text-sm text-red-500">{errors.password.message}</p>
            )}
          </div>

          <Button type="submit" className="w-full" disabled={isPending}>
            {isPending ? '로그인 중...' : '로그인'}
          </Button>
        </form>

        <div className="text-center text-sm">
          계정이 없으신가요?{' '}
          <Link href="/register" className="text-primary font-medium underline">
            회원가입
          </Link>
        </div>
      </Card>
    </div>
  );
}
