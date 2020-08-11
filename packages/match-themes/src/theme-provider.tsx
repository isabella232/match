import * as React from "react";
import * as PropTypes from "prop-types";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import { TwilioDesignTokens } from "@twilio-labs/match-tokens";

export const enum Theme {
  Twilio = "TWILIO",
  SendGrid = "SENDGRID",
  Signal = "SIGNAL",
  Ahoy = "AHOY",
}

export interface MatchThemeProviderProps {
  theme?: Theme;
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
      case "SENDGRID":
        return {};
      case "SIGNAL":
        return {};
      case "AHOY":
        return {};
      case "TWILIO":
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
    Theme.Twilio,
    Theme.SendGrid,
    Theme.Signal,
    Theme.Ahoy,
  ]).isRequired,
};

MatchThemeProvider.defaultProps = {
  theme: Theme.Twilio,
};

export { MatchThemeProvider };
