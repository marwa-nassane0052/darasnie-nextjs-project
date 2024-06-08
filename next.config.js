/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'],
  },
  transpilePackages: ['@mui/x-charts']
};

module.exports = nextConfig;
