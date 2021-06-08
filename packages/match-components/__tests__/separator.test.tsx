import { render } from "@testing-library/react";
import { axe } from "jest-axe";
import * as React from "react";
import { withTheme } from "@twilio-labs/match-themes";
import { Separator } from "../src";

const SeparatorWithTheme = withTheme()(Separator);

describe("Separator", () => {
  test("accessibility violations", async () => {
    const { container } = render(<SeparatorWithTheme />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
