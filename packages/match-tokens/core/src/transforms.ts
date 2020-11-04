import StyleDictionary from "style-dictionary";
import { ColorTranslator } from "colortranslator";
import { REM_CATEGORIES, COLOR_CATEOGRIES } from "./constants";
import { pxToRem } from "./utils";

export const registerTransforms = (
  dictionary: typeof StyleDictionary
): void => {
  dictionary.registerTransform({
    name: "match/pxToRem",
    type: "value",
    matcher: (prop) => REM_CATEGORIES.includes(prop.attributes.category),
    transformer: (prop) => `${pxToRem(prop.value)}rem`,
  });
  dictionary.registerTransform({
    name: "match/color",
    type: "value",
    matcher: (prop) => COLOR_CATEOGRIES.includes(prop.attributes.category),
    transformer: (prop) => {
      const color = new ColorTranslator(prop.value);
      return color.A === 1 ? color.HEX : color.RGBA;
    },
  });
  dictionary.registerTransformGroup({
    name: "match-js",
    transforms: [
      "attribute/cti",
      "name/cti/camel",
      "match/color",
      "match/pxToRem",
    ],
  });
  dictionary.registerTransformGroup({
    name: "match-css",
    transforms: [
      "attribute/cti",
      "name/cti/kebab",
      "match/color",
      "match/pxToRem",
    ],
  });
  dictionary.registerTransformGroup({
    name: "match-scss",
    transforms: [
      "attribute/cti",
      "name/cti/kebab",
      "match/color",
      "match/pxToRem",
    ],
  });
};
