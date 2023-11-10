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
          // us is default, so no folder on destination
          source: '/:locale(us)/:path*',
          locale: false,
          destination: `${FALLBACK_SITE}/:path*`,
        },
        {
          // anything except french (fr) and german (de) as they are proxied to Smartling
          source: '/:locale(uk|jp|au|ca)/:path*',
          locale: false,
          destination: `${FALLBACK_SITE}/:locale/:path*`,
        },
      ],
    };
  },
}

module.exports = nextConfig
