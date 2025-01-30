
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://xCheis.github.io/test-poc/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/https://xCheis.github.io/test-poc/searchPackage"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-UWB3SEQ3.js",
      "chunk-A63LFFMH.js"
    ],
    "route": "/https://xCheis.github.io/test-poc/searchPackage/byTicket"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-EIW4NOO4.js",
      "chunk-A63LFFMH.js"
    ],
    "route": "/https://xCheis.github.io/test-poc/searchPackage/statusByTicket"
  },
  {
    "renderMode": 2,
    "redirectTo": "/https://xCheis.github.io/test-poc/searchPackage/byTicket",
    "route": "/https://xCheis.github.io/test-poc/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 27989, hash: '3049b91b7549c5ecec35860df34e511c9138207d1f457bd0fa20f97bff3e1b63', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17286, hash: '923ad4243f9219eda7b382fd021a03f29066fd3f2423a3856b23703e12140822', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'searchPackage/byTicket/index.html': {size: 59058, hash: 'cfbe0a9d3000bb6762169ede713de74e40d2744f68320973b8811b44795ec3f3', text: () => import('./assets-chunks/searchPackage_byTicket_index_html.mjs').then(m => m.default)},
    'searchPackage/index.html': {size: 58953, hash: '5be5b1a5664a7fd68b5e871656428b25536d1d542e2773a02d574a8db2c04bd0', text: () => import('./assets-chunks/searchPackage_index_html.mjs').then(m => m.default)},
    'searchPackage/statusByTicket/index.html': {size: 59058, hash: '17a2b32c4f7544992c96ddbd8c3d47a62d69a4aff9ed7ae96e61101d76f5c8bf', text: () => import('./assets-chunks/searchPackage_statusByTicket_index_html.mjs').then(m => m.default)},
    'styles-OYHZR5BM.css': {size: 238697, hash: 'MJLrpEsCh24', text: () => import('./assets-chunks/styles-OYHZR5BM_css.mjs').then(m => m.default)}
  },
};
