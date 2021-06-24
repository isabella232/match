import { render } from "@testing-library/react";
import * as React from "react";
import * as TwilioDesignTokens from "@twilio-labs/match-tokens/twilio";
import { TwilioTheme, useTheme } from "../src";

const HookExampleComponent = (): React.ReactElement => {
  const theme = useTheme();
  return <p data-testid="color">{theme.colorBrand}</p>;
};

describe("useTheme", () => {
  test("should be able to access the theme object", () => {
    const { colorBrand } = TwilioDesignTokens;
    const { getByTestId } = render(
      <TwilioTheme>
        <HookExampleComponent />
      </TwilioTheme>
    );
    expect(getByTestId("color")).toHaveTextContent(colorBrand);
  });

  test("should throw error", () => {
    const error = jest.spyOn(console, "error").mockImplementation(() => {});
    expect(() => render(<HookExampleComponent />)).toThrow(
      "[useHook]: must be used within a @twilio-labs/match theme provider"
    );
    expect(error).toBeCalled();
    error.mockRestore();
  });
});
