const {
  unitToPx,
  unitToRem,
} = require("@twilio-labs/match-tokens-core/dist/framework/sdk/css-unit");

Object.defineProperties(Unit.prototype, {
  px: {
    get() {
      return unitToPx(this);
    },
  },
  rem: {
    get() {
      return unitToRem(this);
    },
  },
});
