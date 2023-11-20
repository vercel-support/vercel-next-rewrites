const FALLBACK_SITE = 'https://dialpad-cms-staging.appspot.com';

/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['us', 'uk', 'ca', 'au', 'jp'],
    defaultLocale: 'us',
    localeDetection: false,
  },
  async rewrites() {
    return {
      fallback: [
        {
          source: '/:path*',
          destination: `${FALLBACK_SITE}/:path*/`,
        },
      ]
    }
  },
}

module.exports = nextConfig
