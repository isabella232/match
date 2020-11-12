import { colors, backgroundColors } from "@twilio-labs/match-tokens";
import { ResponsiveValue } from "styled-system";

export type ColorOptions = keyof typeof colors;
export type ColorProp = ResponsiveValue<ColorOptions>;

export type BackgroundColorOptions = keyof typeof backgroundColors;
export type BackgroundColorProp = ResponsiveValue<BackgroundColorOptions>;
