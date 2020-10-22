module.exports = {
  stories: ["../packages/**/*.stories.@(ts|tsx)"],
  addons: [
    {
      name: "@storybook/addon-essentials",
      options: {
        docs: false,
      },
    },
    "@storybook/addon-a11y",
    "@twilio-labs/storybook-theme-switcher",
  ],
};
