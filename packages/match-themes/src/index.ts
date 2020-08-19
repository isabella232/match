import { ThemeProvider } from "styled-components";
import {
  TwilioDesignTokens,
  SendGridDesignTokens,
  SignalDesignTokens,
  AhoyDesignTokens,
} from "@twilio-labs/match-tokens";
import { withTokens } from "./with-tokens";

const TwilioTheme = withTokens(new TwilioDesignTokens())(ThemeProvider);

const SendGridTheme = withTokens(new SendGridDesignTokens())(ThemeProvider);

const SignalTheme = withTokens(new SignalDesignTokens())(ThemeProvider);

const AhoyTheme = withTokens(new AhoyDesignTokens())(ThemeProvider);

export { ThemeVariants } from "./constants";
export { MatchThemeProvider } from "./theme-provider";
export { ThemeConsumer } from "./theme-consumer";
export { useTheme } from "./use-theme";
export { TwilioTheme, SendGridTheme, SignalTheme, AhoyTheme };
