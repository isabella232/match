import * as React from "react";
import { render } from "@testing-library/react";
import { axe } from "jest-axe";
import { withTheme } from "@twilio-labs/match-themes";
import { Flag } from "../src/flag";

const FlagWithTheme = withTheme()(Flag);

describe("Flag", () => {
  test("accessibility violations", async () => {
    const { container } = render(<FlagWithTheme code="US" />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
