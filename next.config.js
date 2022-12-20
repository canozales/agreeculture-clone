/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '172.80.5.120',
        port: '9000',
        // pathname: '/image/upload/**',
      },
    ],
  },
};

module.exports = nextConfig;
