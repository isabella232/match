import * as React from "react";
import { render } from "@testing-library/react";
import {
  TwilioDesignTokens,
  SendGridDesignTokens,
  SignalDesignTokens,
  AhoyDesignTokens,
} from "@twilio-labs/match-tokens";
import {
  TwilioTheme,
  SendGridTheme,
  SignalTheme,
  AhoyTheme,
  ThemeConsumer,
} from "../src";

const ThemeConsumerExample = (): React.ReactElement => {
  return (
    <ThemeConsumer>
      {({ theme }) => <p data-testid="color">{theme.swatch.brand.color}</p>}
    </ThemeConsumer>
  );
};

describe("Theme Providers", () => {
  test("should render the Twilio brand color", (): void => {
    const tokens = new TwilioDesignTokens();
    const { getByTestId } = render(
      <TwilioTheme>
        <ThemeConsumerExample />
      </TwilioTheme>
    );
    expect(getByTestId("color")).toHaveTextContent(tokens.swatch.brand.color);
  });

  test("should render the SendGrid brand color", (): void => {
    const tokens = new SendGridDesignTokens();
    const { getByTestId } = render(
      <SendGridTheme>
        <ThemeConsumerExample />
      </SendGridTheme>
    );
    expect(getByTestId("color")).toHaveTextContent(tokens.swatch.brand.color);
  });

  test("should render the Signal brand color", (): void => {
    const tokens = new SignalDesignTokens();
    const { getByTestId } = render(
      <SignalTheme>
        <ThemeConsumerExample />
      </SignalTheme>
    );
    expect(getByTestId("color")).toHaveTextContent(tokens.swatch.brand.color);
  });

  test("should render the Ahoy brand color", (): void => {
    const tokens = new AhoyDesignTokens();
    const { getByTestId } = render(
      <AhoyTheme>
        <ThemeConsumerExample />
      </AhoyTheme>
    );
    expect(getByTestId("color")).toHaveTextContent(tokens.swatch.brand.color);
  });
});
