import * as CSS from "csstype";

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
