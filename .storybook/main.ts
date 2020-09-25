module.exports = {
  stories: ["../packages/**/*.stories.@(ts|tsx)"],
  addons: [
    "@storybook/addon-backgrounds",
    "@storybook/addon-knobs",
    "@storybook/addon-a11y",
    "@storybook/addon-viewport",
    "@twilio-labs/storybook-theme-switcher",
  ],
};
