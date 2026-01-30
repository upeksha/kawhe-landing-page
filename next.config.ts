import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cms.kawhe.shop',
      },
      {
        protocol: 'https',
        hostname: '*.gravatar.com',
      },
    ],
  },
};

export default nextConfig;
