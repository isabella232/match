import * as React from "react";
import * as PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";
import {
  TwilioDesignTokens,
  SendGridDesignTokens,
  SignalDesignTokens,
  AhoyDesignTokens,
} from "@twilio-labs/match-tokens";
import { ThemeVariants } from "./constants";
import { GlobalStyles, StyledBase } from "./styles";

export interface MatchThemeProviderProps {
  theme?: ThemeVariants;
  includeBaseStyles: boolean;
}

const MatchThemeProvider: React.FC<MatchThemeProviderProps> = ({
  theme,
  includeBaseStyles,
  ...props
}) => {
  const tokens = React.useMemo(() => {
    switch (theme) {
      case ThemeVariants.SENDGRID:
        return new SendGridDesignTokens();
      case ThemeVariants.SIGNAL:
        return new SignalDesignTokens();
      case ThemeVariants.AHOY:
        return new AhoyDesignTokens();
      case ThemeVariants.TWILIO:
      default:
        return new TwilioDesignTokens();
    }
  }, [theme]);
  return (
    <ThemeProvider theme={tokens}>
      <GlobalStyles />
      {includeBaseStyles ? <StyledBase {...props} /> : <div {...props} />}
    </ThemeProvider>
  );
};

MatchThemeProvider.propTypes = {
  theme: PropTypes.oneOf([
    ThemeVariants.TWILIO,
    ThemeVariants.SENDGRID,
    ThemeVariants.SIGNAL,
    ThemeVariants.AHOY,
  ]).isRequired,
  includeBaseStyles: PropTypes.bool.isRequired,
};

MatchThemeProvider.defaultProps = {
  theme: ThemeVariants.TWILIO,
  includeBaseStyles: true,
};

export { MatchThemeProvider };
