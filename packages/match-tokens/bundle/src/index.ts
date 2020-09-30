import type {
  LinearGradientData,
  GradientStopData,
  ColorData,
} from "@diez/prefabs";
import type {
  MediaQuery,
  Unit,
  Weight,
  DropShadows,
  Color as ColorClass,
  LinearGradient as LinearGradientClass,
} from "@twilio-labs/match-tokens-twilio";

type Color = ColorClass & ColorData;

interface GradientStop extends Omit<GradientStopData, "color"> {
  color: Color;
}

interface LinearGradient
  extends LinearGradientClass,
    Omit<LinearGradientData, "stops"> {
  stops: GradientStop[];
}

export type { Color, MediaQuery, Unit, Weight, LinearGradient };

export { TwilioDesignTokens } from "@twilio-labs/match-tokens-twilio";
export { SendGridDesignTokens } from "@twilio-labs/match-tokens-sendgrid";
export { SignalDesignTokens } from "@twilio-labs/match-tokens-signal";
export { AhoyDesignTokens } from "@twilio-labs/match-tokens-ahoy";
