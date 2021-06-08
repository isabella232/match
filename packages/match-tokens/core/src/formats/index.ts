import StyleDictionary from "style-dictionary";
import { commonJsTokenFormatter } from "./common";
import { customMediaTokenFormatter } from "./custom-media";
import { moduleTokenFormatter } from "./module";
import { typeDeclarationTokenFormatter } from "./type-declaration";

export const registerFormats = (dictionary: typeof StyleDictionary): void => {
  dictionary.registerFormat({
    name: "match/module",
    formatter: moduleTokenFormatter,
  });
  dictionary.registerFormat({
    name: "match/common-js",
    formatter: commonJsTokenFormatter,
  });
  dictionary.registerFormat({
    name: "match/type-declaration",
    formatter: typeDeclarationTokenFormatter,
  });
  dictionary.registerFormat({
    name: "match/custom-media",
    formatter: customMediaTokenFormatter,
  });
};
