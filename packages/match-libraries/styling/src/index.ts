import { system } from "styled-system";

export const color = system({
  color: {
    property: "color",
    scale: "swatch",
    transform(val: string, scale) {
      if (!scale || !(val in scale)) return;
      return scale[val].color;
    },
  },
});

export const iconSize = system({
  size: {
    properties: ["width", "height"],
    scale: "iconSize",
    transform(val: string, scale) {
      if (!scale || !(val in scale)) return;
      return scale[val].rem;
    },
  },
});

export const space = system({
  padding: {
    property: "padding",
    scale: "space",
    transform(val: string, scale) {
      if (!scale || !(val in scale)) return;
      return scale[val].rem;
    },
  },
});

export { ResponsiveValue } from "styled-system";
