const config = require("../svgr.config");

module.exports = {
  ...config,
  indexTemplate: require("../logo/index-template"),
  template: require("./template"),
};
