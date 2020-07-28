const { queryToCss } = require('../src/sdk/css-media-query');

Object.defineProperties(MediaQuery.prototype, {
  mediaQuery: {
    get() {
      return queryToCss(this);
    },
  },
});
