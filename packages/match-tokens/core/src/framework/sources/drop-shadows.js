const {
  dropShadowsToCss,
} = require("@twilio-labs/match-tokens-core/dist/framework/sdk/css-drop-shadows");

Object.defineProperties(DropShadows.prototype, {
  boxShadow: {
    get() {
      return dropShadowsToCss(this);
    },
  },
});
