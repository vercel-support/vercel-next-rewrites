import { createProxyMiddleware } from 'http-proxy-middleware';

const FALLBACK_SITE = 'https://nodejs--miguelnavarro8.repl.co';

const GET = createProxyMiddleware({
  target: FALLBACK_SITE,
  changeOrigin: true,
  pathRewrite: { '^/api/smartling/': '/' },
  xfwd: true,
});

export default GET;
