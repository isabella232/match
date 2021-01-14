const config = require("../svgr.config");

module.exports = {
  ...config,
  icon: true,
  template: require("./template"),
  indexTemplate: require("./index-template"),
  replaceAttrValues: {
    ["#394762"]: "currentColor",
  },
  svgProps: {
    width: "100%",
    height: "100%",
    role: "img",
    ["aria-hidden"]: "{decorative}",
  },
};
