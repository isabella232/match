import { render } from "@testing-library/react";
import * as React from "react";
import * as SendGridDesignTokens from "@twilio-labs/match-tokens/sendgrid";
import * as TwilioDesignTokens from "@twilio-labs/match-tokens/twilio";
import { TwilioTheme, SendGridTheme, ThemeConsumer } from "../src";

const ThemeConsumerExample = (): React.ReactElement => {
  return (
    <ThemeConsumer>
      {({ theme }) => <p data-testid="color">{theme.colorBrand}</p>}
    </ThemeConsumer>
  );
};

describe("Theme Providers", () => {
  test("should render the Twilio brand color", (): void => {
    const { colorBrand } = TwilioDesignTokens;
    const { getByTestId } = render(
      <TwilioTheme>
        <ThemeConsumerExample />
      </TwilioTheme>
    );
    expect(getByTestId("color")).toHaveTextContent(colorBrand);
  });

  test("should render the SendGrid brand color", (): void => {
    const { colorBrand } = SendGridDesignTokens;
    const { getByTestId } = render(
      <SendGridTheme>
        <ThemeConsumerExample />
      </SendGridTheme>
    );
    expect(getByTestId("color")).toHaveTextContent(colorBrand);
  });
});
