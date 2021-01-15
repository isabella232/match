const config = require("../svgr.config");

module.exports = {
  ...config,
  template: require("./template"),
  indexTemplate: require("./index-template"),
  replaceAttrValues: {
    ["#1F304C"]: "currentColor",
  },
  svgProps: {
    ...config.svgProps,
    width: "100%",
    height: "auto",
  },
};
