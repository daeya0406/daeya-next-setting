import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    environment: "jsdom",
    globals: true, // test, expect 등을 import 없이 사용 가능하게 함
    setupFiles: "./vitest.setup.ts", // 테스트 시작 전 실행될 설정 파일
  },
});
