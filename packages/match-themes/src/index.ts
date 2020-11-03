import { ThemeProvider } from "styled-components";
import * as TwilioDesignTokens from "@twilio-labs/match-tokens/twilio";
import * as SendGridDesignTokens from "@twilio-labs/match-tokens/sendgrid";
import * as AhoyDesignTokens from "@twilio-labs/match-tokens/ahoy";
import { withTokens } from "./with-tokens";

const TwilioTheme = withTokens(TwilioDesignTokens)(ThemeProvider);
const SendGridTheme = withTokens(SendGridDesignTokens)(ThemeProvider);
const AhoyTheme = withTokens(AhoyDesignTokens)(ThemeProvider);

export { ThemeVariants } from "./constants";
export { MatchThemeProvider } from "./theme-provider";
export { StyledBase } from "./styles";
export { withTheme } from "./with-theme";
export { ThemeConsumer } from "./theme-consumer";
export { useTheme } from "./use-theme";
export { TwilioTheme, SendGridTheme, AhoyTheme };
