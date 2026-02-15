import { z } from "zod";

export const signupSchema = z
  .object({
    username: z
      .string()
      .min(1, { message: "이메일을 입력해주세요." })
      .email({ message: "올바른 이메일 형식이 아닙니다." }),
    name: z.string().min(2, { message: "이름은 최소 2자 이상이어야 합니다." }),
    password: z
      .string()
      .min(8, { message: "비밀번호는 최소 8자 이상이어야 합니다." })
      .regex(/[a-zA-Z]/, { message: "영문자가 포함되어야 합니다." })
      .regex(/[0-9]/, { message: "숫자가 포함되어야 합니다." })
      .regex(/[!%*#?&]/, { message: "특수문자가 포함되어야 합니다." }),
    confirmPassword: z
      .string()
      .min(1, { message: "비밀번호 확인을 입력해주세요." }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "비밀번호가 일치하지 않습니다.",
  });

export type SignupInput = z.infer<typeof signupSchema>;
