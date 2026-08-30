import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/reborn-countdown',
  assetPrefix: '/reborn-countdown/',
};

export default nextConfig;
