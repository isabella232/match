import * as React from "react";
import { render } from "@testing-library/react";
import * as TwilioDesignTokens from "@twilio-labs/match-tokens/twilio";
import * as SendGridDesignTokens from "@twilio-labs/match-tokens/sendgrid";
import * as AhoyDesignTokens from "@twilio-labs/match-tokens/ahoy";
import { TwilioTheme, SendGridTheme, AhoyTheme, ThemeConsumer } from "../src";

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

  test("should render the Ahoy brand color", (): void => {
    const { colorBrand } = AhoyDesignTokens;
    const { getByTestId } = render(
      <AhoyTheme>
        <ThemeConsumerExample />
      </AhoyTheme>
    );
    expect(getByTestId("color")).toHaveTextContent(colorBrand);
  });
});
