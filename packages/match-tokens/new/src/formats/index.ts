import StyleDictionary from "style-dictionary";
import { es6TokenFormatter } from "./es6";

export const registerFormats = (dictionary: typeof StyleDictionary): void => {
  dictionary.registerFormat({
    name: "match/es6",
    formatter: es6TokenFormatter,
  });
};
