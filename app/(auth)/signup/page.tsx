"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupSchema, type SignupInput } from "./schema";
import { Input } from "@/shared/ui/Input/Input";
import { Button } from "@/shared/ui/Button";
import { Icon } from "@/shared/ui/Icons";
import { Card } from "@/shared/ui/Card/Card";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { apiRequest } from "@/shared/api/auth";
import { toast } from "@/shared/ui/Toast";

export default function SignupPage() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignupInput>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      username: "",
      name: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data: SignupInput) => {
    try {
      // 래퍼 사용! (apiRequest 내부에 JSON.stringify 로직이 있으므로 데이터만 던짐)
      await apiRequest("/auth/signup", {
        method: "POST",
        body: JSON.stringify(data),
      });

      toast.success("회원가입에 성공했습니다! 로그인해주세요.");
      router.push("/login");
    } catch (err: any) {
      toast.error(err.message || "회원가입 중 오류가 발생했습니다.");
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-12">
      <Card size="lg" className="w-full max-w-md">
        <Card.Header className="text-center space-y-2">
          <h1 className="text-3xl font-extrabold tracking-tight">회원가입</h1>
          <p className="text-gray-500">새로운 계정을 만들어보세요.</p>
        </Card.Header>

        <Card.Content>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <Input
              label="이메일 주소"
              placeholder="name@company.com"
              leftSection={<Icon name="mail" size={18} />}
              error={errors.username?.message}
              {...register("username")}
            />

            <Input
              label="이름"
              placeholder="홍길동"
              leftSection={<Icon name="user" size={18} />}
              error={errors.name?.message}
              {...register("name")}
            />

            <Input
              label="비밀번호"
              type="password"
              placeholder="••••••••"
              leftSection={<Icon name="lock" size={18} />}
              error={errors.password?.message}
              {...register("password")}
            />

            <Input
              label="비밀번호 확인"
              type="password"
              placeholder="••••••••"
              leftSection={<Icon name="check" size={18} />}
              error={errors.confirmPassword?.message}
              {...register("confirmPassword")}
            />

            <Button
              type="submit"
              size="full"
              radius="lg"
              isLoading={isSubmitting}
              className="h-12 text-lg shadow-lg shadow-primary/20"
            >
              가입하기
            </Button>
          </form>
        </Card.Content>

        <Card.Footer className="justify-center gap-2 border-t border-gray-50 pt-4">
          이미 계정이 있으신가요?
          <Link
            href="/login"
            className="font-semibold text-primary hover:underline"
          >
            로그인 하기
          </Link>
        </Card.Footer>
      </Card>
    </main>
  );
}
