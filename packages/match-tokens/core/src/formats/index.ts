import StyleDictionary from "style-dictionary";
import { es6TokenFormatter } from "./es6";
import { commonJsTokenFormatter } from "./common";
import { customMediaTokenFormatter } from "./custom-media";
import { typeDeclarationTokenFormatter } from "./type-declaration";

export const registerFormats = (dictionary: typeof StyleDictionary): void => {
  dictionary.registerFormat({
    name: "match/es6",
    formatter: es6TokenFormatter,
  });
  dictionary.registerFormat({
    name: "match/common",
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
