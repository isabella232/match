module.exports = {
  icon: true,
  typescript: false,
  memo: false,
  titleProp: true,
  expandProps: false,
  filenameCase: "pascal",
  svgProps: {
    role: "img",
    width: "100%",
    height: "100%",
    ["aria-hidden"]: "{decorative}",
  },
  template: require("./component-template.cjs"),
  indexTemplate: require("./index-template.cjs"),
  replaceAttrValues: {
    ["#394762"]: "currentColor",
    ["#000"]: "currentColor",
  },
};
