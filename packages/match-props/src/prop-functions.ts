import { system } from "styled-system";

export const backgroundColor = system({
  backgroundColor: {
    property: "backgroundColor",
    scale: "backgroundColors",
  },
});

export const textColor = system({
  color: {
    property: "color",
    scale: "textColors",
  },
});

export const iconSize = system({
  size: {
    properties: ["width", "height"],
    scale: "iconSizes",
  },
});
