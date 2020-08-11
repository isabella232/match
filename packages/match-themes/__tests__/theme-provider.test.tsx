import * as React from "react";
import { render } from "@testing-library/react";
import { TwilioDesignTokens } from "@twilio-labs/match-tokens";
import { Theme } from "../src";

const TwilioDS = new TwilioDesignTokens();

const ThemeConsumerExample = (): React.ReactElement => {
  return (
    <Theme.Consumer>
      {({ theme }) => <p data-testid="color">{theme.swatch.brand.color}</p>}
    </Theme.Consumer>
  );
};

describe("Theme.Provider", () => {
  test("should render the twilio brand color", (): void => {
    const { getByTestId } = render(
      <Theme.Provider>
        <ThemeConsumerExample />
      </Theme.Provider>
    );
    expect(getByTestId("color")).toHaveTextContent(TwilioDS.swatch.brand.color);
  });
});
