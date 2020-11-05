import { colors, iconSizes, space } from "@twilio-labs/match-tokens/twilio";
import { ResponsiveValue } from "styled-system";

export type ColorOptions = keyof typeof colors;
export type Color = ResponsiveValue<ColorOptions>;

export type IconSizeOptions = keyof typeof iconSizes;
export type IconSize = ResponsiveValue<IconSizeOptions>;

export type SpaceOptions = keyof typeof space;
export type Space = ResponsiveValue<SpaceOptions>;
