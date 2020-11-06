import * as React from "react";
import { render } from "@testing-library/react";
import * as TwilioDesignTokens from "@twilio-labs/match-tokens/twilio";
import * as SendGridDesignTokens from "@twilio-labs/match-tokens/sendgrid";
import { withTheme, ThemeConsumer, ThemeVariants } from "../src";

const ThemeConsumerExample: React.FC = () => {
  return (
    <ThemeConsumer>
      {({ theme }) => <p data-testid="color">{theme.colorBrand}</p>}
    </ThemeConsumer>
  );
};

describe("withTheme provider", () => {
  test("should render the Twilio brand color", (): void => {
    const { colorBrand } = TwilioDesignTokens;
    const WithTwilioTheme = withTheme()(ThemeConsumerExample);
    const { getByTestId } = render(<WithTwilioTheme />);
    expect(getByTestId("color")).toHaveTextContent(colorBrand);
  });

  test("should render the SendGrid brand color", (): void => {
    const { colorBrand } = SendGridDesignTokens;
    const WithSendGridTheme = withTheme(ThemeVariants.SENDGRID)(
      ThemeConsumerExample
    );
    const { getByTestId } = render(<WithSendGridTheme />);
    expect(getByTestId("color")).toHaveTextContent(colorBrand);
  });
});
