import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com", // 이미지가 저장된 실제 서버
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
