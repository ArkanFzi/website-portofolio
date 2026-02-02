import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // reactCompiler: true, // Commenting out potential invalid config if needed, or keeping if it works.
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:5022/api/:path*',
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
