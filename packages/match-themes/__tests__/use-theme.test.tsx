import * as React from "react";
import { render } from "@testing-library/react";
import { TwilioDesignTokens } from "@twilio-labs/match-tokens";
import { TwilioTheme, useTheme } from "../src";

const HookExampleComponent = (): React.ReactElement => {
  const theme = useTheme();
  return <p data-testid="color">{theme.swatch.brand.color}</p>;
};

describe("useTheme", () => {
  test("should be able to access the theme object", (): void => {
    const tokens = new TwilioDesignTokens();
    const { getByTestId } = render(
      <TwilioTheme>
        <HookExampleComponent />
      </TwilioTheme>
    );
    expect(getByTestId("color")).toHaveTextContent(tokens.swatch.brand.color);
  });
});
