module.exports = {
  stories: ["../packages/**/*.stories.@(ts|tsx)"],
  typescript: {
    reactDocgen: "none",
  },
  addons: [
    {
      name: "@storybook/addon-essentials",
      options: {
        docs: false,
      },
    },
    "@storybook/addon-a11y",
  ],
};
