'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useRegister } from '@/shared/api/hooks/useAuth';
import { Button } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';
import { Card } from '@/shared/ui/Card';
import { toast } from '@/shared/ui/Toast';

const registerSchema = z
  .object({
    username: z
      .string()
      .min(3, '아이디는 3자 이상이어야 합니다')
      .max(20, '아이디는 20자 이하여야 합니다'),
    password: z
      .string()
      .min(6, '비밀번호는 6자 이상이어야 합니다')
      .max(50, '비밀번호는 50자 이하여야 합니다'),
    passwordConfirm: z.string(),
    name: z.string().min(2, '이름은 2자 이상이어야 합니다'),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: '비밀번호가 일치하지 않습니다',
    path: ['passwordConfirm'],
  });

type RegisterForm = z.infer<typeof registerSchema>;

export default function RegisterPage() {
  const router = useRouter();
  const { mutate: register, isPending } = useRegister();

  const {
    register: registerField,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterForm>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = (data: RegisterForm) => {
    register(
      {
        username: data.username,
        password: data.password,
        name: data.name,
      },
      {
        onSuccess: () => {
          toast.success('회원가입이 완료되었습니다');
          router.push('/login');
        },
        onError: (error) => {
          toast.error(error.message || '회원가입에 실패했습니다');
        },
      }
    );
  };

  return (
    <div className="flex min-h-screen items-center justify-center px-4 py-12">
      <Card className="w-full max-w-md space-y-6 p-8">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">회원가입</h1>
          <p className="text-muted-foreground">새로운 계정을 만들어보세요</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="username" className="text-sm font-medium">
              아이디
            </label>
            <Input
              id="username"
              {...registerField('username')}
              placeholder="아이디를 입력하세요"
              disabled={isPending}
            />
            {errors.username && (
              <p className="text-sm text-red-500">{errors.username.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium">
              이름
            </label>
            <Input
              id="name"
              {...registerField('name')}
              placeholder="이름을 입력하세요"
              disabled={isPending}
            />
            {errors.name && (
              <p className="text-sm text-red-500">{errors.name.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <label htmlFor="password" className="text-sm font-medium">
              비밀번호
            </label>
            <Input
              id="password"
              type="password"
              {...registerField('password')}
              placeholder="비밀번호를 입력하세요"
              disabled={isPending}
            />
            {errors.password && (
              <p className="text-sm text-red-500">{errors.password.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <label htmlFor="passwordConfirm" className="text-sm font-medium">
              비밀번호 확인
            </label>
            <Input
              id="passwordConfirm"
              type="password"
              {...registerField('passwordConfirm')}
              placeholder="비밀번호를 다시 입력하세요"
              disabled={isPending}
            />
            {errors.passwordConfirm && (
              <p className="text-sm text-red-500">
                {errors.passwordConfirm.message}
              </p>
            )}
          </div>

          <Button type="submit" className="w-full" disabled={isPending}>
            {isPending ? '가입 중...' : '회원가입'}
          </Button>
        </form>

        <div className="text-center text-sm">
          이미 계정이 있으신가요?{' '}
          <Link href="/login" className="text-primary font-medium underline">
            로그인
          </Link>
        </div>
      </Card>
    </div>
  );
}
