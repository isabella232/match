import * as React from "react";
import { ThemeProvider } from "styled-components";
import {
  TwilioDesignTokens,
  SendGridDesignTokens,
  SignalDesignTokens,
  AhoyDesignTokens,
} from "@twilio-labs/match-tokens";
import { GlobalStyles, StyledBase } from "./styles";

const withTokens = (
  tokens:
    | TwilioDesignTokens
    | SendGridDesignTokens
    | SignalDesignTokens
    | AhoyDesignTokens
) => (WrappedProvider: typeof ThemeProvider): React.FC => {
  const ThemeProviderWithTokens = ({ ...props }) => {
    return (
      <WrappedProvider theme={tokens}>
        <GlobalStyles />
        <StyledBase {...props} />
      </WrappedProvider>
    );
  };
  return ThemeProviderWithTokens;
};

export { withTokens };
