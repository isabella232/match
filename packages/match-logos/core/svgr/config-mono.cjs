module.exports = {
  ...require("./config-base.cjs"),
  template: require("./component-mono-template.cjs"),
  indexTemplate: require("./index-template.cjs"),
  replaceAttrValues: {
    ["#1F304C"]: "currentColor",
    ["#1f304c"]: "currentColor",
  },
};
