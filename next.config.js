/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    OPEN_AI_KEY: process.env.OPEN_AI_KEY,
  },
};

module.exports = nextConfig;
