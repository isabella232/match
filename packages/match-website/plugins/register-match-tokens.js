module.exports = function () {
  return {
    name: "register-match-tokens",
    getClientModules() {
      return [
        require.resolve(
          "@twilio-labs/match-tokens-twilio/dist/static/styles.css"
        ),
      ];
    },
  };
};
