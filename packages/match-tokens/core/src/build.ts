import path from "path";

import StyleDictionary, { DesignToken } from "style-dictionary";

import { registerFormats } from "./formats";
import { registerTransforms } from "./transforms";

registerFormats(StyleDictionary);
registerTransforms(StyleDictionary);

function getStyleDictionaryConfig(brand: string) {
  return {
    // eslint-disable-next-line unicorn/prefer-module
    source: [path.resolve(__dirname, `tokens/${brand}/index.ts`)],
    platforms: {
      js: {
        transformGroup: "match-js",
        buildPath: `${brand}/`,
        files: [
          {
            format: "match/module",
            destination: "index.mjs",
          },
          {
            format: "match/common-js",
            destination: "index.js",
          },
          {
            format: "match/type-declaration",
            destination: "index.d.ts",
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
            filter: (prop: DesignToken) =>
              prop?.attributes?.category !== "mediaQuery",
          },
          {
            format: "match/custom-media",
            destination: "custom-media.css",
            filter: (prop: DesignToken) =>
              prop?.attributes?.category === "mediaQuery",
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

["twilio", "sendgrid"].map((brand) => {
  const StyleDictionaryExtended = StyleDictionary.extend(
    getStyleDictionaryConfig(brand)
  );
  StyleDictionaryExtended.buildAllPlatforms();
});
