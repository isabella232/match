const config = require("../svgr.config");

module.exports = {
  ...config,
  template: require("./template"),
  indexTemplate: require("./index-template"),
  replaceAttrValues: {
    ["#394762"]: "currentColor",
  },
  svgProps: {
    ...config.svgProps,
    ["aria-hidden"]: "{decorative}",
  },
};
