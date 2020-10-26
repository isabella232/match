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

export { ResponsiveValue } from "styled-system";
