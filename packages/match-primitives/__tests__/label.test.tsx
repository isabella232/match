import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import * as React from "react";

import { withTheme } from "@twilio-labs/match-themes";

import { Label, LabelSize } from "../src";

const LabelWithTheme = withTheme()(Label);

describe("Label", () => {
  test("required indicator", () => {
    const { rerender } = render(
      <LabelWithTheme required={true} disabled={false}>
        Help text
      </LabelWithTheme>
    );
    expect(screen.getByTestId("required-indicator")).toBeInTheDocument();
    rerender(
      <LabelWithTheme required={false} disabled={false}>
        Help text
      </LabelWithTheme>
    );
    expect(screen.queryByTestId("required-indicator")).not.toBeInTheDocument();
  });

  test("accessibility violations", async () => {
    const { container } = render(
      <LabelWithTheme disabled={false} required={false}>
        Help text
      </LabelWithTheme>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  test("small accessibility violations", async () => {
    const { container } = render(
      <LabelWithTheme disabled={false} required={false} size={LabelSize.SMALL}>
        Help text
      </LabelWithTheme>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  test("disabled accessibility violations", async () => {
    const { container } = render(
      <LabelWithTheme disabled={true} required={false}>
        Help text
      </LabelWithTheme>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
