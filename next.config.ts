import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [70],
    remotePatterns: [
      { protocol: "https", hostname: "picsum.photos" },
      { protocol: "https", hostname: "nextjs-alura-teste.vercel.app" },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://nextjs-alura-teste.vercel.app/api/:path*",
      },
    ];
  },
};

export default nextConfig;
