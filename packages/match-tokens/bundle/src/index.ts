import type {
  LinearGradientData,
  GradientStopData,
  ColorData,
} from "@diez/prefabs";
import type {
  MediaQuery,
  Unit,
  Weight,
  DropShadows as DropShadowsClass,
  Color as ColorClass,
  LinearGradient as LinearGradientClass,
} from "@twilio-labs/match-tokens-twilio";

import type { DropShadowsData } from "@twilio-labs/match-tokens-core";

type Color = ColorClass & ColorData;

type DropShadows = DropShadowsClass & DropShadowsData;

interface GradientStop extends Omit<GradientStopData, "color"> {
  color: Color;
}

interface LinearGradient
  extends LinearGradientClass,
    Omit<LinearGradientData, "stops"> {
  stops: GradientStop[];
}

export type { Color, MediaQuery, Unit, Weight, LinearGradient, DropShadows };

export { TwilioDesignTokens } from "@twilio-labs/match-tokens-twilio";
export { SendGridDesignTokens } from "@twilio-labs/match-tokens-sendgrid";
export { SignalDesignTokens } from "@twilio-labs/match-tokens-signal";
export { AhoyDesignTokens } from "@twilio-labs/match-tokens-ahoy";
