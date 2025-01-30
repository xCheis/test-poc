
export default {
  basePath: 'https://xCheis.github.io/test-poc',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
