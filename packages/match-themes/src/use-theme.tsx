import * as React from "react";
import { ThemeContext } from "styled-components";
import {
  TwilioDesignTokens,
  SendGridDesignTokens,
  SignalDesignTokens,
  AhoyDesignTokens,
} from "@twilio-labs/match-tokens";

const useTheme = ():
  | TwilioDesignTokens
  | SendGridDesignTokens
  | SignalDesignTokens
  | AhoyDesignTokens => {
  const context = React.useContext(ThemeContext);
  if (!context) {
    throw new Error(
      "[useHook]: must be used within a @twilio-labs/match-themes provider"
    );
  }
  return context;
};

export { useTheme };
