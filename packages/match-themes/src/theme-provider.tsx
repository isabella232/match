import * as React from "react";
import * as PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";
import * as TwilioDesignTokens from "@twilio-labs/match-tokens/twilio";
import * as SendGridDesignTokens from "@twilio-labs/match-tokens/sendgrid";
import * as AhoyDesignTokens from "@twilio-labs/match-tokens/ahoy";
import { ThemeVariants } from "./constants";
import { GlobalStyles, StyledBase } from "./styles";

export interface MatchThemeProviderProps {
  theme?: ThemeVariants;
  excludeBaseStyles?: boolean;
}

const MatchThemeProvider: React.FC<MatchThemeProviderProps> = ({
  theme,
  excludeBaseStyles,
  ...props
}) => {
  const tokens = React.useMemo(() => {
    switch (theme) {
      case ThemeVariants.SENDGRID:
        return SendGridDesignTokens;
      case ThemeVariants.AHOY:
        return AhoyDesignTokens;
      case ThemeVariants.TWILIO:
      default:
        return TwilioDesignTokens;
    }
  }, [theme]);
  return (
    <ThemeProvider theme={tokens}>
      <GlobalStyles />
      {!excludeBaseStyles ? <StyledBase {...props} /> : <div {...props} />}
    </ThemeProvider>
  );
};

MatchThemeProvider.propTypes = {
  theme: PropTypes.oneOf([
    ThemeVariants.TWILIO,
    ThemeVariants.SENDGRID,
    ThemeVariants.AHOY,
  ]).isRequired,
  excludeBaseStyles: PropTypes.bool,
};

MatchThemeProvider.defaultProps = {
  theme: ThemeVariants.TWILIO,
  excludeBaseStyles: false,
};

export { MatchThemeProvider };
