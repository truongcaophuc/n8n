import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    // build production không fail vì warning
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
