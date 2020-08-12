import * as React from "react";
import * as PropTypes from "prop-types";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import {
  TwilioDesignTokens,
  SendGridDesignTokens,
  SignalDesignTokens,
  AhoyDesignTokens,
} from "@twilio-labs/match-tokens";
import { ThemeVariants } from "./constants";

export interface MatchThemeProviderProps {
  theme?: ThemeVariants;
}

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

const MatchThemeProvider: React.FC<MatchThemeProviderProps> = ({
  theme,
  ...props
}) => {
  const themeProps = React.useMemo(() => {
    switch (theme) {
      case ThemeVariants.SendGrid:
        return new SendGridDesignTokens();
      case ThemeVariants.Signal:
        return new SignalDesignTokens();
      case ThemeVariants.Ahoy:
        return new AhoyDesignTokens();
      case ThemeVariants.Twilio:
      default:
        return new TwilioDesignTokens();
    }
  }, [theme]);
  return (
    <ThemeProvider theme={themeProps}>
      <GlobalStyles />
      <StyledBase {...props} />
    </ThemeProvider>
  );
};

MatchThemeProvider.propTypes = {
  theme: PropTypes.oneOf([
    ThemeVariants.Twilio,
    ThemeVariants.SendGrid,
    ThemeVariants.Signal,
    ThemeVariants.Ahoy,
  ]).isRequired,
};

MatchThemeProvider.defaultProps = {
  theme: ThemeVariants.Twilio,
};

export { MatchThemeProvider };
