const { queryToCss } = require("../lib/framework/sdk/css-media-query");

Object.defineProperties(MediaQuery.prototype, {
  mediaQuery: {
    get() {
      return queryToCss(this);
    },
  },
});
