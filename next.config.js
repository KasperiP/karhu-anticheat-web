/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    i18n: {
        locales: ['en', 'fi'],
        defaultLocale: 'en',
    },
    poweredByHeader: false,
    output: 'standalone',
}

module.exports = nextConfig
