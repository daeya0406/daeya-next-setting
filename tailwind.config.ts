import type { Config } from "tailwindcss";

const config: Config = {
  // 1. 경로 수정: src 폴더가 없다면 루트 폴더들을 명시해야 합니다.
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./shared/**/*.{js,ts,jsx,tsx,mdx}",
    "./features/**/*.{js,ts,jsx,tsx,mdx}",
    "./entities/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // 2. 폰트 변수명 일치: layout.tsx에서 정의한 이름과 같아야 합니다.
        // 아까 폰트 설정에서 variable: "--font-pretendard"로 하셨다면 아래처럼 수정!
        sans: ["var(--font-pretendard)", "ui-sans-serif", "system-ui"],
      },
      colors: {
        // 3. CSS 변수 기반 컬러 세팅 (globals.css에 해당 변수가 있어야 함)
        primary: {
          DEFAULT: "rgb(var(--primary) / <alpha-value>)",
          foreground: "rgb(var(--primary-foreground) / <alpha-value>)",
        },
        background: "rgb(var(--background) / <alpha-value>)",
        foreground: "rgb(var(--foreground) / <alpha-value>)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [],
};
export default config;
