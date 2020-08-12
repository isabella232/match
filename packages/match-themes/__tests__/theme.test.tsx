import * as React from "react";
import { render } from "@testing-library/react";
import {
  TwilioDesignTokens,
  SendGridDesignTokens,
  SignalDesignTokens,
  AhoyDesignTokens,
} from "@twilio-labs/match-tokens";
import { Theme, ThemeVariants } from "../src";

const ThemeConsumerExample = (): React.ReactElement => {
  return (
    <Theme.Consumer>
      {({ theme }) => <p data-testid="color">{theme.swatch.brand.color}</p>}
    </Theme.Consumer>
  );
};

describe("Theme.Provider", () => {
  test("should render the Twilio brand color", (): void => {
    const tokens = new TwilioDesignTokens();
    const { getByTestId } = render(
      <Theme.Provider>
        <ThemeConsumerExample />
      </Theme.Provider>
    );
    expect(getByTestId("color")).toHaveTextContent(tokens.swatch.brand.color);
  });

  test("should render the SendGrid brand color", (): void => {
    const tokens = new SendGridDesignTokens();
    const { getByTestId } = render(
      <Theme.Provider theme={ThemeVariants.SendGrid}>
        <ThemeConsumerExample />
      </Theme.Provider>
    );
    expect(getByTestId("color")).toHaveTextContent(tokens.swatch.brand.color);
  });

  test("should render the Signal brand color", (): void => {
    const tokens = new SignalDesignTokens();
    const { getByTestId } = render(
      <Theme.Provider theme={ThemeVariants.Signal}>
        <ThemeConsumerExample />
      </Theme.Provider>
    );
    expect(getByTestId("color")).toHaveTextContent(tokens.swatch.brand.color);
  });

  test("should render the Ahoy brand color", (): void => {
    const tokens = new AhoyDesignTokens();
    const { getByTestId } = render(
      <Theme.Provider theme={ThemeVariants.Ahoy}>
        <ThemeConsumerExample />
      </Theme.Provider>
    );
    expect(getByTestId("color")).toHaveTextContent(tokens.swatch.brand.color);
  });
});
