import { createProxyMiddleware } from 'http-proxy-middleware';

const FALLBACK_SITE = 'https://nodejs--miguelnavarro8.repl.co';

export default createProxyMiddleware({
  target: FALLBACK_SITE,
  changeOrigin: true,
  pathRewrite: { '^/api/smartling/': '/' },
  xfwd: true,
});

// export const config = {
//   api: {
//     bodyParser: false, // enable POST requests
//     externalResolver: true, // hide warning message
//   },
// };