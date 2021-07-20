import * as React from "react";
import { Provider as ReakitProvider } from "reakit";
import { ThemeProvider } from "styled-components";

import { GlobalStyles, StyledBase } from "./styles";
import { TwilioThemeShape, SendGridThemeShape } from "./types";

export const withTokens =
  (tokens: TwilioThemeShape | SendGridThemeShape) =>
  (WrappedProvider: typeof ThemeProvider): React.FC => {
    const ThemeProviderWithTokens = ({ ...props }) => {
      return (
        <ReakitProvider>
          <WrappedProvider theme={tokens}>
            <GlobalStyles />
            <StyledBase {...props} />
          </WrappedProvider>
        </ReakitProvider>
      );
    };
    return ThemeProviderWithTokens;
  };
