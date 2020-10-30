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
  dictionary.registerTransformGroup({
    name: "match/js",
    transforms: ["attribute/cti", "name/ti/camel", "color/hex"],
  });
  dictionary.registerTransformGroup({
    name: "match/css",
    transforms: ["attribute/cti", "name/ti/kebab", "color/css"],
  });
};
