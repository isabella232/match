import { ResponsiveValue } from "styled-system";
import {
  colors,
  backgroundColors,
  textColors,
} from "@twilio-labs/match-tokens";

export type ColorOptions = keyof typeof colors | "currentColor";
export type ColorProp = ResponsiveValue<ColorOptions>;

export type BackgroundColorOptions = keyof typeof backgroundColors;
export type BackgroundColorProp = ResponsiveValue<BackgroundColorOptions>;

export type TextColorOptions = keyof typeof textColors | "inherit";
export type TextColorProp = ResponsiveValue<TextColorOptions>;
