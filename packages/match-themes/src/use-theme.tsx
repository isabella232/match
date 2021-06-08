import * as React from "react";
import { ThemeContext } from "styled-components";
import { TwilioThemeShape, SendGridThemeShape } from "./types";

export const useTheme = (): TwilioThemeShape | SendGridThemeShape => {
  const context = React.useContext(ThemeContext);
  if (!context) {
    throw new Error(
      "[useHook]: must be used within a @twilio-labs/match-themes provider"
    );
  }
  return context;
};
