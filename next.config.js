const FALLBACK_SITE = 'https://dialpad.sl.smartling.com';

/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['us', 'uk', 'ca', 'au', 'jp'],
    defaultLocale: 'us',
    localeDetection: false,
  },
  async rewrites() {
    return [
      {
        source: '/fr/:path*',
        locale: false,
        destination: `${FALLBACK_SITE}/fr/:path*`,
      },
    ]
  },
}

module.exports = nextConfig
