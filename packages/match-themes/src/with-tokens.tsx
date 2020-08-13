import * as React from "react";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import {
  TwilioDesignTokens,
  SendGridDesignTokens,
  SignalDesignTokens,
  AhoyDesignTokens,
} from "@twilio-labs/match-tokens";

const GlobalStyles = createGlobalStyle`
  html {
    font-size: 100%;
  }
  body {
    margin: 0;
  }
  *, *::after, *::before {
    box-sizing: border-box;
  }
`;

const StyledBase = styled.div``;

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
