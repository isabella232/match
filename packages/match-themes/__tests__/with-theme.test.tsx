import { render, screen } from "@testing-library/react";
import * as React from "react";

import * as SendGridDesignTokens from "@twilio-labs/match-tokens/sendgrid";
import * as TwilioDesignTokens from "@twilio-labs/match-tokens/twilio";

import { withTheme, ThemeConsumer, ThemeVariants } from "../src";

const ThemeConsumerExample: React.FC = () => {
  return (
    <ThemeConsumer>
      {({ theme }) => <p data-testid="color">{theme.colorBrand}</p>}
    </ThemeConsumer>
  );
};

describe("withTheme", () => {
  test("should render the Twilio brand color", (): void => {
    const { colorBrand } = TwilioDesignTokens;
    const WithTwilioTheme = withTheme()(ThemeConsumerExample);
    render(<WithTwilioTheme />);
    expect(screen.getByTestId("color")).toHaveTextContent(colorBrand);
  });

  test("should render the SendGrid brand color", (): void => {
    const { colorBrand } = SendGridDesignTokens;
    const WithSendGridTheme = withTheme(ThemeVariants.SENDGRID)(
      ThemeConsumerExample
    );
    render(<WithSendGridTheme />);
    expect(screen.getByTestId("color")).toHaveTextContent(colorBrand);
  });
});
