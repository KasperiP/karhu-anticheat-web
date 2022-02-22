/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    i18n: {
        locales: ['en', 'fi'],
        defaultLocale: 'en',
        localeDetection: false,
    },
    experimental: {
        outputStandalone: true,
    },
}

module.exports = nextConfig
