import * as CSS from "csstype";

export interface Colors {
  [token: string]: {
    value: CSS.Property.Color;
  };
}
