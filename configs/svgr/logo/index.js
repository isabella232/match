const config = require("../svgr.config");

module.exports = {
  ...config,
  icon: true,
  template: require("./template"),
  indexTemplate: require("./index-template"),
  replaceAttrValues: {
    ["#1F304C"]: "currentColor",
  },
  svgProps: {
    role: "img",
    width: "100%",
    height: "auto",
  },
};
