import { TwilioDesignTokens } from "@twilio-labs/match-tokens";
import { ResponsiveValue } from "@twilio-labs/match-styling-library";

export type ColorOptions = keyof TwilioDesignTokens["swatch"];
export type Color = ResponsiveValue<ColorOptions>;

export type IconSizeOptions = keyof TwilioDesignTokens["iconSize"];
export type IconSize = ResponsiveValue<IconSizeOptions>;

export type SpaceOptions = keyof TwilioDesignTokens["space"];
export type Space = ResponsiveValue<SpaceOptions>;

export type ShadowOptions = keyof TwilioDesignTokens["space"];
export type Shadow = ResponsiveValue<SpaceOptions>;
