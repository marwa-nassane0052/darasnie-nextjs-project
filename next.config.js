/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost','aclanthology.org'],
  },
  transpilePackages: ['@mui/x-charts']
};

module.exports = nextConfig;
