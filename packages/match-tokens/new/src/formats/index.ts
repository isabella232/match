import StyleDictionary from "style-dictionary";
import { es6TokenFormatter } from "./es6";
import { commonJsTokenFormatter } from "./common";
import { customMediaFormatter } from "./custom-media";

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
    name: "match/custom-media",
    formatter: customMediaFormatter,
  });
};
