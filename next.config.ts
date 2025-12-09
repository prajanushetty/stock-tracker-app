import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // allow images served from flagcdn (used for country flags)
    domains: ["flagcdn.com"],
    // alternatively, use `remotePatterns` for finer control:
    // remotePatterns: [
    //   {
    //     protocol: 'https',
    //     hostname: 'flagcdn.com',
    //     port: '',
    //     pathname: '/**',
    //   },
    // ],
  },
};

export default nextConfig;
