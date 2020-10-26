import { TwilioDesignTokens } from "@twilio-labs/match-tokens";
import { ResponsiveValue } from "@twilio-labs/match-styling-library";

export type ColorOptions = keyof TwilioDesignTokens["swatch"];
export type Color = ResponsiveValue<ColorOptions>;
