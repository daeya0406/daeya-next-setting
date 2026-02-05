"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, type LoginInput } from "./schema";
import { Input } from "@/shared/ui/Input/Input";
import { Button } from "@/shared/ui/Button";
import { Icon } from "@/shared/ui/Icons";
import Link from "next/link";
import { useState } from "react";
import { Card } from "@/shared/ui/Card/Card";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  const onSubmit = async (data: LoginInput) => {
    // 백엔드 로그인 API 호출 로직 필요
    console.log("Login Data:", data);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    alert("로그인 성공!");
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <Card size="lg" className="w-full max-w-md">
        <Card.Header className="text-center space-y-2">
          <h1 className="text-3xl font-extrabold tracking-tight">로그인</h1>
          <p className="text-gray-500">로그인 하면 다양한 이용이 가능합니다.</p>
        </Card.Header>

        <Card.Content>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <Input
              label="이메일 주소"
              placeholder="name@company.com"
              leftSection={<Icon name="user" size={18} />}
              error={errors.email?.message}
              {...register("email")}
            />

            <Input
              label="비밀번호"
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              leftSection={<Icon name="lock" size={18} />}
              rightSection={
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="hover:text-primary transition-colors focus:outline-none"
                >
                  <Icon name={showPassword ? "eyeOff" : "eye"} size={18} />
                </button>
              }
              error={errors.password?.message}
              {...register("password")}
            />

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer group">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary"
                  {...register("rememberMe")}
                />
                <span className="text-gray-600 group-hover:text-gray-900">
                  로그인 유지
                </span>
              </label>
              <Link
                href="#"
                className="font-medium text-primary hover:underline"
              >
                비밀번호 찾기
              </Link>
            </div>

            <Button
              type="submit"
              size="full"
              radius="lg"
              isLoading={isSubmitting}
              className="h-12 text-lg shadow-lg shadow-primary/20"
            >
              로그인
            </Button>
          </form>
        </Card.Content>

        <Card.Footer className="justify-center gap-2 border-t border-gray-50 pt-4">
          계정이 없으신가요?
          <Link
            href="/register"
            className="font-semibold text-primary hover:underline"
          >
            회원가입 하기
          </Link>
        </Card.Footer>
      </Card>
    </main>
  );
}
