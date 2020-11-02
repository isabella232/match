import * as CSS from "csstype";

// TODO: Remove declaration and use proper types once this PR is merged:
// https://github.com/amzn/style-dictionary/pull/410
declare module "style-dictionary";

export interface Colors {
  [token: string]: {
    value: CSS.Property.Color;
  };
}

export interface Sizes {
  [token: string]: {
    value: number;
  };
}
