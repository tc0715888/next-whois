/** @type {import('next').NextConfig} */
import setupPWA from 'next-pwa';

// 基础的 Next.js 配置，包含了 i18n 设置
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'zh', 'zh-tw', 'de', 'ru', 'ja', 'fr', 'ko'],
    defaultLocale: 'en',
  },
};

// 使用 next-pwa 包裹基础配置
const withPWA = setupPWA({
    dest: 'public',
    disable: process.env.NODE_ENV === 'development',
    register: true,
    skipWaiting: true,
});

export default withPWA(nextConfig);
