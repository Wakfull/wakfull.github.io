
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 2164, hash: '63253d99c327e120e1618fcd333350771521d07e56544d6c0e782258bb254ed9', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1895, hash: '1926eb72fcc12e342808de19857cd1457572bd64f8dabe02133d78efec3177f8', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-Q5UUTVMW.css': {size: 2612, hash: 'q2kAIRw+XvY', text: () => import('./assets-chunks/styles-Q5UUTVMW_css.mjs').then(m => m.default)}
  },
};
