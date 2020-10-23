module.exports = {
  typescript: true,
  memo: true,
  titleProp: true,
  icon: true,
  expandProps: false,
  template: require("./template"),
  indexTemplate: require("./index-template"),
  replaceAttrValues: {
    ["#394762"]: "currentColor",
  },
};
