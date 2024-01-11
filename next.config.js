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
      beforeFiles: [
        {
          source: '/us/:path+',
          locale: false,
          destination: `https://www.dialpad.com/:path+`,
          missing: [
            {
              type: 'header',
              key: 'x-rewrite-exclude'
            }
          ]
        },
      ]
    }
  },
}

module.exports = nextConfig
