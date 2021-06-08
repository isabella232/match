import { render } from "@testing-library/react";
import { axe } from "jest-axe";
import * as React from "react";
import { withTheme } from "@twilio-labs/match-themes";
import { Card } from "../src";

const CardWithTheme = withTheme()(Card);

describe("Card", () => {
  test("accessibility violations", async () => {
    const { container } = render(
      <CardWithTheme padding="scale100">I am a card!</CardWithTheme>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
