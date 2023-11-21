const FALLBACK_SITE = 'https://nodejs--miguelnavarro8.repl.co';

/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['us', 'uk', 'ca', 'au', 'jp', 'fr', 'de'],
    defaultLocale: 'us',
    localeDetection: false,
  },
  trailingSlash: true,
  async rewrites() {
    return {
      fallback: [
        {
          source: '/fr/:path*',
          locale: false,
          destination: `/api/smartling/fr/:path*`,
        },
      ]
    }
  },
}

module.exports = nextConfig
