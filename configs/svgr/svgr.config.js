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
    ["#000"]: "currentColor",
  },
  svgProps: {
    width: "100%",
    height: "100%",
    role: "img",
    ["aria-hidden"]: "{decorative}",
  },
};
