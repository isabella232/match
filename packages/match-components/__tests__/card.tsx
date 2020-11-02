import "jest-styled-components";
import * as React from "react";
import { render } from "@testing-library/react";
import { axe } from "jest-axe";
import { withTheme } from "@twilio-labs/match-themes";
import { Card } from "../src";

const CardWithTheme = withTheme()(Card);

describe("Card", () => {
  test("should render default values", () => {
    const { container } = render(<CardWithTheme>Card!</CardWithTheme>);
    expect(container.firstChild).toMatchSnapshot();
  });

  test("accessibility violations", async () => {
    const { container } = render(
      <CardWithTheme padding="scale100">I am a card!</CardWithTheme>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
