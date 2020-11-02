import "jest-styled-components";
import * as React from "react";
import { render } from "@testing-library/react";
import { withTheme } from "@twilio-labs/match-themes";
import { axe } from "jest-axe";
import { Box } from "../src";

const BoxWithTheme = withTheme()(Box);

describe("Spaces", () => {
  test("snapshot", () => {
    const { container } = render(<BoxWithTheme>Box</BoxWithTheme>);
    expect(container.firstChild).toMatchSnapshot();
  });

  test("accessibility violations", async () => {
    const { container } = render(
      <BoxWithTheme>
        Claustrophobic people are more productive thinking out of the box.
      </BoxWithTheme>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
