import * as CSS from "csstype";

interface Tokens<T> {
  [token: string]: {
    value: T;
  };
}

export type Colors = Tokens<CSS.Property.Color>;
export type Backgrounds = Tokens<CSS.Property.BackgroundImage>;
export type Sizes = Tokens<number>;
export type FontWeights = Tokens<CSS.Property.FontWeight>;
export type FontFamilies = Tokens<CSS.Property.FontFamily>;
