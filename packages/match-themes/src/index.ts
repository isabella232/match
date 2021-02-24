import { ThemeProvider } from "styled-components";
import * as TwilioDesignTokens from "@twilio-labs/match-tokens/twilio";
import * as SendGridDesignTokens from "@twilio-labs/match-tokens/sendgrid";
import * as AhoyDesignTokens from "@twilio-labs/match-tokens/ahoy";
import { withTokens } from "./with-tokens";

export const TwilioTheme = withTokens(TwilioDesignTokens)(ThemeProvider);
export const SendGridTheme = withTokens(SendGridDesignTokens)(ThemeProvider);
export const AhoyTheme = withTokens(AhoyDesignTokens)(ThemeProvider);

export * from "./constants";
export * from "./theme-provider";
export * from "./styles";
export * from "./with-theme";
export * from "./theme-consumer";
export * from "./use-theme";
export * from "./types";
