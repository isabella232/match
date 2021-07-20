import { render, screen } from "@testing-library/react";
import * as React from "react";

import * as SendGridDesignTokens from "@twilio-labs/match-tokens/sendgrid";
import * as TwilioDesignTokens from "@twilio-labs/match-tokens/twilio";

import {
  TwilioTheme,
  SendGridTheme,
  ThemeConsumer,
  MatchThemeProvider,
  ThemeVariants,
} from "../src";

const ThemeConsumerExample = (): React.ReactElement => {
  return (
    <ThemeConsumer>
      {({ theme }) => <p data-testid="color">{theme.colorBrand}</p>}
    </ThemeConsumer>
  );
};

describe("ThemeProvider", () => {
  test("should render the Twilio brand color", (): void => {
    const { colorBrand } = TwilioDesignTokens;
    render(
      <TwilioTheme>
        <ThemeConsumerExample />
      </TwilioTheme>
    );
    expect(screen.getByTestId("color")).toHaveTextContent(colorBrand);
  });

  test("should render the SendGrid brand color", (): void => {
    const { colorBrand } = SendGridDesignTokens;
    render(
      <SendGridTheme>
        <ThemeConsumerExample />
      </SendGridTheme>
    );
    expect(screen.getByTestId("color")).toHaveTextContent(colorBrand);
  });

  test("should exclude base styles", () => {
    const { textColorPrimary } = TwilioDesignTokens;
    render(
      <MatchThemeProvider
        data-testid="theme"
        theme={ThemeVariants.TWILIO}
        excludeBaseStyles
      />
    );
    expect(screen.getByTestId("theme")).not.toHaveStyle({
      color: textColorPrimary,
    });
  });
});
