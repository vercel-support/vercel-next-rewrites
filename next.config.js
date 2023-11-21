const FALLBACK_SITE = 'https://dialpad-cms-staging.appspot.com';

/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['us', 'uk', 'ca', 'au', 'jp', 'fr'],
    defaultLocale: 'us',
    localeDetection: false,
  },
  trailingSlash: true,
  async rewrites() {
    return {
      fallback: [
        {
          source: '/ca/:path*',
          locale: false,
          destination: `${FALLBACK_SITE}/ca/:path*`,
        },
      ]
    }
  },
}

module.exports = nextConfig
