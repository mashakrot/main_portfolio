/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',
  basePath: isProd ? '/main_portfolio' : '',
  assetPrefix: isProd ? '/main_portfolio/' : '',
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? '/main_portfolio' : '',
  },
};

export default nextConfig;
