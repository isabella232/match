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
    width: "100%",
    height: "100%",
    ["aria-hidden"]: "{decorative}",
  },
};
