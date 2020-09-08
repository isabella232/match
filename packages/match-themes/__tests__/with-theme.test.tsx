import * as React from "react";
import { render } from "@testing-library/react";
import {
  TwilioDesignTokens,
  SignalDesignTokens,
} from "@twilio-labs/match-tokens";
import { withTheme, ThemeConsumer, ThemeVariants } from "../src";

const ThemeConsumerExample: React.FC = () => {
  return (
    <ThemeConsumer>
      {({ theme }) => <p data-testid="color">{theme.swatch.brand.color}</p>}
    </ThemeConsumer>
  );
};

describe("withTheme provider", () => {
  test("should render the Twilio brand color", (): void => {
    const tokens = new TwilioDesignTokens();
    const WithTwilioTheme = withTheme()(ThemeConsumerExample);
    const { getByTestId } = render(<WithTwilioTheme />);
    expect(getByTestId("color")).toHaveTextContent(tokens.swatch.brand.color);
  });

  test("should render the Signal brand color", (): void => {
    const tokens = new SignalDesignTokens();
    const WithSignalTheme = withTheme(ThemeVariants.SIGNAL)(
      ThemeConsumerExample
    );
    const { getByTestId } = render(<WithSignalTheme />);
    expect(getByTestId("color")).toHaveTextContent(tokens.swatch.brand.color);
  });
});
