const {
  queryToCss,
} = require("@twilio-labs/match-tokens-core/dist/framework/sdk/css-media-query");

Object.defineProperties(MediaQuery.prototype, {
  mediaQuery: {
    get() {
      return queryToCss(this);
    },
  },
});
