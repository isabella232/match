import StyleDictionary from "style-dictionary";
import path from "path";
import pkg from "../package.json";
import { registerFormats } from "./formats";
import { registerTransforms } from "./transforms";

registerFormats(StyleDictionary);
registerTransforms(StyleDictionary);

function getStyleDictionaryConfig(brand) {
  return {
    source: [
      path.resolve(__dirname, `tokens/core/index.ts`),
      path.resolve(__dirname, `tokens/${brand}/index.ts`),
    ],
    platforms: {
      js: {
        transformGroup: "match-js",
        buildPath: `${brand}/`,
        files: [
          {
            format: "match/es6",
            destination: "index.es.js",
          },
          {
            format: "match/common",
            destination: "index.js",
          },
        ],
      },
      css: {
        transformGroup: "match-css",
        buildPath: `${brand}/`,
        files: [
          {
            format: "css/variables",
            destination: "variables.css",
            filter: (prop) => prop.attributes.category !== "breakpoint",
          },
          {
            format: "match/custom-media",
            destination: "custom-media.css",
            filter: (prop) => prop.attributes.category === "breakpoint",
          },
        ],
      },
      scss: {
        transformGroup: "match-scss",
        buildPath: `${brand}/`,
        files: [
          {
            format: "scss/variables",
            destination: "variables.scss",
          },
        ],
      },
    },
  };
}

pkg.files.map((brand) => {
  const StyleDictionaryExtended = StyleDictionary.extend(
    getStyleDictionaryConfig(brand)
  );
  StyleDictionaryExtended.buildAllPlatforms();
});
