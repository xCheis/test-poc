
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/test-poc/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/test-poc/searchPackage"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-UWB3SEQ3.js",
      "chunk-A63LFFMH.js"
    ],
    "route": "/test-poc/searchPackage/byTicket"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-EIW4NOO4.js",
      "chunk-A63LFFMH.js"
    ],
    "route": "/test-poc/searchPackage/statusByTicket"
  },
  {
    "renderMode": 2,
    "redirectTo": "/test-poc/searchPackage/byTicket",
    "route": "/test-poc/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 27965, hash: '8b82d74529a159898075407136b05e1c91d589a4068d52f0fdb4e1bae24d5111', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17262, hash: '3f42370af237519aa735736622f597be343fd0d7fd1fb0a89980fccaab4984bd', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'searchPackage/byTicket/index.html': {size: 59034, hash: 'bfaecd70f933c92aa1e974ff8f55c72c1de0389357b84b25360d68d39e0baf35', text: () => import('./assets-chunks/searchPackage_byTicket_index_html.mjs').then(m => m.default)},
    'searchPackage/index.html': {size: 29370, hash: 'c8de2be5bbc95520d34d75322bd10f4bcdd60b4b80bdc5f81c6e7329805092b3', text: () => import('./assets-chunks/searchPackage_index_html.mjs').then(m => m.default)},
    'searchPackage/statusByTicket/index.html': {size: 54061, hash: '435dbe75ad1b09784cdf1266c9dc34a00858c043664cdc9b2595db3d41039365', text: () => import('./assets-chunks/searchPackage_statusByTicket_index_html.mjs').then(m => m.default)},
    'styles-OYHZR5BM.css': {size: 238697, hash: 'MJLrpEsCh24', text: () => import('./assets-chunks/styles-OYHZR5BM_css.mjs').then(m => m.default)}
  },
};
