import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  // optional: for assets to work correctly
  assetPrefix: './',
  images: { unoptimized: true },
};

export default nextConfig;
