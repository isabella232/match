import * as React from "react";
import { ThemeVariants } from "./constants";
import { MatchThemeProvider } from "./theme-provider";

const withTheme = (theme: ThemeVariants = ThemeVariants.TWILIO) => <
  /* eslint-disable-next-line @typescript-eslint/ban-types */
  OriginalProps extends {}
>(
  WrappedComponent: React.ComponentType<OriginalProps>
): React.FC<OriginalProps> => {
  const ComponentWithTheme: React.FC<OriginalProps> = ({ ...props }) => {
    return (
      <MatchThemeProvider theme={theme}>
        <WrappedComponent {...props} />
      </MatchThemeProvider>
    );
  };
  return ComponentWithTheme;
};

export { withTheme };
