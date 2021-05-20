import * as React from "react";
import { ThemeProvider } from "styled-components";
import { TwilioThemeShape, SendGridThemeShape, AhoyThemeShape } from "./types";
import { GlobalStyles, StyledBase } from "./styles";

export const withTokens =
  (tokens: TwilioThemeShape | SendGridThemeShape | AhoyThemeShape) =>
  (WrappedProvider: typeof ThemeProvider): React.FC => {
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
