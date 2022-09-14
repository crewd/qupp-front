/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: `http://ec2-3-37-201-15.ap-northeast-2.compute.amazonaws.com:8080/:path*`,
      },
    ];
  },
}

module.exports = nextConfig
