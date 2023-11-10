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
      beforeFiles: [
        {
          source: '/sitemap.xml',
          destination: '/sitemap/',
        },
        {
          source: '/sitemap-2.xml',
          destination: '/sitemap/2',
        },
      ],
      fallback: [
        {
          source: '/:path*',
          destination: `${FALLBACK_SITE}/:path*`,
        },
      ],
    };
  },
}

module.exports = nextConfig
