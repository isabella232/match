import * as React from "react";
import { ThemeContext } from "styled-components";
import { TwilioThemeShape, SendGridThemeShape, AhoyThemeShape } from "./types";

const useTheme = (): TwilioThemeShape | SendGridThemeShape | AhoyThemeShape => {
  const context = React.useContext(ThemeContext);
  if (!context) {
    throw new Error(
      "[useHook]: must be used within a @twilio-labs/match-themes provider"
    );
  }
  return context;
};

export { useTheme };
