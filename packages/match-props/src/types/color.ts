import {
  colors,
  backgroundColors,
  textColors,
} from "@twilio-labs/match-tokens";
import { ResponsiveValue } from "styled-system";

export type ColorOptions = keyof typeof colors | "currentColor" | "inherit";
export type ColorProp = ResponsiveValue<ColorOptions>;

export type BackgroundColorOptions = keyof typeof backgroundColors;
export type BackgroundColorProp = ResponsiveValue<BackgroundColorOptions>;

export type TextColorOptions = keyof typeof textColors | "inherit";
export type TextColorProp = ResponsiveValue<TextColorOptions>;