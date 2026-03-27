
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 2164, hash: '78340bcff163ffdced2a4ba018f657840c85dcb425db02b41dda91779c07b191', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1895, hash: '1bbfeb97718b0b2bdf74fbd4b05ba885e05fce747d627132698f23ee49da2be4', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-Q5UUTVMW.css': {size: 2612, hash: 'q2kAIRw+XvY', text: () => import('./assets-chunks/styles-Q5UUTVMW_css.mjs').then(m => m.default)}
  },
};
