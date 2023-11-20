const FALLBACK_SITE = 'https://dialpad-cms-staging.appspot.com';

/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['us', 'uk', 'ca', 'au', 'jp', 'fr'],
    defaultLocale: 'us',
    localeDetection: false,
  },
  async rewrites() {
    return {
      fallback: [
        {
          source: '/fr/:path*',
          locale: false,
          destination: `${FALLBACK_SITE}/fr/:path*`,
        },
      ]
    }
  },
}

module.exports = nextConfig
