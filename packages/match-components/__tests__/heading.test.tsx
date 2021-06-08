import { render } from "@testing-library/react";
import { axe } from "jest-axe";
import * as React from "react";
import { withTheme } from "@twilio-labs/match-themes";
import { Heading, HeadingVariant } from "../src";

const HeadingWithTheme = withTheme()(Heading);

describe("Heading", () => {
  test("accessibility violations", async () => {
    const { container } = render(
      <HeadingWithTheme variant={HeadingVariant.H1}>
        Ahoy, world!
      </HeadingWithTheme>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
