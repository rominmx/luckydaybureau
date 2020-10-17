const path = require('path');
const PrerenderSPAPlugin = require('prerender-spa-plugin');

// eslint-disable
module.exports = {
  configureWebpack: () => {
    if (process.env.NODE_ENV !== 'production') return;

    // eslint-disable-next-line consistent-return
    return {
      plugins: [
        new PrerenderSPAPlugin(
          // Absolute path to compiled SPA
          path.resolve(__dirname, 'dist'),
          // List of routes to prerender
          ['/write'],
        ),
      ],
    };
  },
};
// eslint-enable
