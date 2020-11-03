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
  paddingLeft: {
    property: "paddingLeft",
    scale: "space",
    transform(val: string, scale) {
      if (!scale || !(val in scale)) return;
      return scale[val].rem;
    },
  },
  paddingRight: {
    property: "paddingRight",
    scale: "space",
    transform(val: string, scale) {
      if (!scale || !(val in scale)) return;
      return scale[val].rem;
    },
  },
  paddingBottom: {
    property: "paddingBottom",
    scale: "space",
    transform(val: string, scale) {
      if (!scale || !(val in scale)) return;
      return scale[val].rem;
    },
  },
  paddingTop: {
    property: "paddingTop",
    scale: "space",
    transform(val: string, scale) {
      if (!scale || !(val in scale)) return;
      return scale[val].rem;
    },
  },
  paddingX: {
    properties: ["paddingLeft", "paddingRight"],
    scale: "space",
    transform(val: string, scale) {
      if (!scale || !(val in scale)) return;
      return scale[val].rem;
    },
  },
  paddingY: {
    properties: ["paddingBottom", "paddingTop"],
    scale: "space",
    transform(val: string, scale) {
      if (!scale || !(val in scale)) return;
      return scale[val].rem;
    },
  },
  margin: {
    property: "margin",
    scale: "space",
    transform(val: string, scale) {
      if (!scale || !(val in scale)) return;
      return scale[val].rem;
    },
  },
  marginLeft: {
    property: "marginLeft",
    scale: "space",
    transform(val: string, scale) {
      if (!scale || !(val in scale)) return;
      return scale[val].rem;
    },
  },
  marginRight: {
    property: "marginRight",
    scale: "space",
    transform(val: string, scale) {
      if (!scale || !(val in scale)) return;
      return scale[val].rem;
    },
  },
  marginBottom: {
    property: "marginBottom",
    scale: "space",
    transform(val: string, scale) {
      if (!scale || !(val in scale)) return;
      return scale[val].rem;
    },
  },
  marginTop: {
    property: "marginTop",
    scale: "space",
    transform(val: string, scale) {
      if (!scale || !(val in scale)) return;
      return scale[val].rem;
    },
  },
  marginX: {
    properties: ["marginLeft", "marginRight"],
    scale: "space",
    transform(val: string, scale) {
      if (!scale || !(val in scale)) return;
      return scale[val].rem;
    },
  },
  marginY: {
    properties: ["marginBottom", "marginTop"],
    scale: "space",
    transform(val: string, scale) {
      if (!scale || !(val in scale)) return;
      return scale[val].rem;
    },
  },
});

export { ResponsiveValue } from "styled-system";
