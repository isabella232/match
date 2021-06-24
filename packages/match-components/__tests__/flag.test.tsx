import { render } from "@testing-library/react";
import { axe } from "jest-axe";
import * as React from "react";
import { withTheme } from "@twilio-labs/match-themes";
import { Flag, FlagSize } from "../src/flag";
import { resolveCommonModule } from "../src/flag/utils";

const FlagWithTheme = withTheme()(Flag);

describe("Flag", () => {
  test("resolves common module", () => {
    const path = "/path/to/file";
    const module = { default: "/path/to/file" };
    expect(resolveCommonModule(path)).toEqual(path);
    expect(resolveCommonModule(module)).toEqual(path);
  });

  test("accessibility violations", async () => {
    const { container } = render(<FlagWithTheme code="US" />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  test("accessibility violations decorative", async () => {
    const { container } = render(<FlagWithTheme decorative code="US" />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  test("accessibility violations small", async () => {
    const { container } = render(
      <FlagWithTheme size={FlagSize.SMALL} code="US" />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  test("accessibility violations large", async () => {
    const { container } = render(
      <FlagWithTheme size={FlagSize.LARGE} code="US" />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
