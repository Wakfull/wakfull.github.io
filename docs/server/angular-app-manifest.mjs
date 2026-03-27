
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 2164, hash: '8b3c54a82d2af6600e04fe03151b84b86985fc7cfcdcf1ffde17ddb85d983d79', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1895, hash: '5af3400477f13931a6edc70a15cbe271723f726eb40a196437818f7548d19f00', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-Q5UUTVMW.css': {size: 2612, hash: 'q2kAIRw+XvY', text: () => import('./assets-chunks/styles-Q5UUTVMW_css.mjs').then(m => m.default)}
  },
};
