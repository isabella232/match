import { render } from "@testing-library/react";
import { axe } from "jest-axe";
import * as React from "react";

import { withTheme } from "@twilio-labs/match-themes";

import { HelpText, HelpTextVariant } from "../src";

const HelpTextWithTheme = withTheme()(HelpText);

describe("HelpText", () => {
  test("accessibility violations", async () => {
    const { container } = render(
      <HelpTextWithTheme>Help text</HelpTextWithTheme>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  test("error accessibility violations", async () => {
    const { container } = render(
      <HelpTextWithTheme variant={HelpTextVariant.ERROR}>
        Help text
      </HelpTextWithTheme>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
