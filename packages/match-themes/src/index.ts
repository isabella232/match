import { ThemeProvider } from "styled-components";
import {
  TwilioDesignTokens,
  SendGridDesignTokens,
  SignalDesignTokens,
  AhoyDesignTokens,
} from "@twilio-labs/match-tokens";
import { withTheme } from "./with-theme";

const TwilioTheme = withTheme(new TwilioDesignTokens())(ThemeProvider);

const SendGridTheme = withTheme(new SendGridDesignTokens())(ThemeProvider);

const SignalTheme = withTheme(new SignalDesignTokens())(ThemeProvider);

const AhoyTheme = withTheme(new AhoyDesignTokens())(ThemeProvider);

export { ThemeConsumer } from "./theme-consumer";
export { TwilioTheme, SendGridTheme, SignalTheme, AhoyTheme };

// export { ThemeVariants } from "./constants";

// export const Theme = {
//   Provider: MatchThemeProvider,
//   Consumer: MatchThemeConsumer,
// };
