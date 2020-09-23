import * as React from "react";
import { render } from "@testing-library/react";
import { axe } from "jest-axe";
import { withTheme } from "@twilio-labs/match-themes";
import { Button } from "../src";

const ButtonWithTheme = withTheme()(Button);

describe("Button", () => {
  test("renders as an anchor", () => {
    const { getByText } = render(
      <ButtonWithTheme href="https://twilio.com">Click Me</ButtonWithTheme>
    );
    expect(getByText(/click me/i).tagName.toLowerCase()).toBe("a");
  });

  test("renders as a button", () => {
    const { getByText } = render(<ButtonWithTheme>Click Me</ButtonWithTheme>);
    expect(getByText(/click me/i).tagName.toLowerCase()).toBe("button");
  });

  test("snapshot", (): void => {
    const { asFragment } = render(<ButtonWithTheme>Click Me</ButtonWithTheme>);
    expect(asFragment()).toMatchSnapshot();
  });

  test("accessibility violations", async () => {
    const { container } = render(<ButtonWithTheme>Click Me</ButtonWithTheme>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
