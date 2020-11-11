import { system } from "styled-system";

export const backgroundColor = system({
  backgroundColor: {
    property: "backgroundColor",
    scale: "backgroundColors",
  },
});

export const iconSize = system({
  size: {
    properties: ["width", "height"],
    scale: "iconSizes",
  },
});
