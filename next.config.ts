import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: false,
  eslint: {
    // Only enable ESLint in development
    ignoreDuringBuilds: process.env.NODE_ENV === 'production',
  },
  typescript: {
    /* Allow production builds to successfully complete even if
    your project has type errors. Careful as this is a high-risk function. */
    ignoreBuildErrors: true,
  },
  images: {
    domains: ['images.unsplash.com'],
  },
  webpack: (config) => {
    if (config.module && config.module.rules) {
      // Keep only the raw-loader rule
      config.module.rules.push({
        test: /\.(json|js|ts|tsx|jsx)$/,
        resourceQuery: /raw/,
        use: 'raw-loader',
      });
    }
    return config;
  },
};

export default nextConfig;