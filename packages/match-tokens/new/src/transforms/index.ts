import StyleDictionary from "style-dictionary";
import { kebabCase } from "lodash";

export const registerTransformGroups = (
  dictionary: typeof StyleDictionary
): void => {
  dictionary.registerTransform({
    name: "name/ti/kebab",
    type: "name",
    transformer: function (prop, options) {
      return kebabCase(
        [options.prefix].concat(prop.path.slice(1, prop.path.length)).join(" ")
      );
    },
  });
  dictionary.registerTransform({
    name: "size/pxToRem",
    type: "value",
    matcher: (prop) => prop.attributes.category === "size",
    transformer: (prop) =>
      `${Math.round((Number.parseInt(prop.value, 10) / 16) * 1000) / 1000}rem`,
  });
  dictionary.registerTransformGroup({
    name: "match/js",
    transforms: ["attribute/cti", "name/ti/camel", "color/hex", "size/pxToRem"],
  });
  dictionary.registerTransformGroup({
    name: "match/css",
    transforms: ["attribute/cti", "name/ti/kebab", "color/css", "size/pxToRem"],
  });
  dictionary.registerTransformGroup({
    name: "match/scss",
    transforms: ["attribute/cti", "name/ti/kebab", "color/css", "size/pxToRem"],
  });
};
