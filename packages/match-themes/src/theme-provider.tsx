import * as PropTypes from "prop-types";
import * as React from "react";
import { Provider as ReakitProvider } from "reakit";
import { ThemeProvider } from "styled-components";

import * as SendGridDesignTokens from "@twilio-labs/match-tokens/sendgrid";
import * as TwilioDesignTokens from "@twilio-labs/match-tokens/twilio";

import { ThemeVariants } from "./constants";
import { GlobalStyles, StyledBase } from "./styles";

export interface MatchThemeProviderProps {
  theme?: ThemeVariants;
  excludeBaseStyles?: boolean;
}

export const MatchThemeProvider: React.FC<MatchThemeProviderProps> = ({
  theme,
  excludeBaseStyles,
  ...props
}) => {
  const tokens = React.useMemo(() => {
    switch (theme) {
      case ThemeVariants.SENDGRID:
        return SendGridDesignTokens;
      case ThemeVariants.TWILIO:
      default:
        return TwilioDesignTokens;
    }
  }, [theme]);
  return (
    <ReakitProvider>
      <ThemeProvider theme={tokens}>
        <GlobalStyles />
        {!excludeBaseStyles ? <StyledBase {...props} /> : <div {...props} />}
      </ThemeProvider>
    </ReakitProvider>
  );
};

MatchThemeProvider.propTypes = {
  theme: PropTypes.oneOf([...Object.values(ThemeVariants)]).isRequired,
  excludeBaseStyles: PropTypes.bool,
};

MatchThemeProvider.defaultProps = {
  theme: ThemeVariants.TWILIO,
  excludeBaseStyles: false,
};
