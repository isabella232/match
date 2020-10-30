import "jest-styled-components";
import * as React from "react";
import { render } from "@testing-library/react";
import { withTheme } from "@twilio-labs/match-themes";
import { axe } from "jest-axe";
import { Box } from "../src";

const BoxWithTheme = withTheme()(Box);

describe("Spaces", () => {
  it("it should render with padding equal to space20", (): void => {
    const padding = render(
      <BoxWithTheme padding="scale20">space20</BoxWithTheme>
    );
    expect(padding).toMatchSnapshot();
  });

  test("accessibility violations", async () => {
    const { container } = render(
      <BoxWithTheme padding="scale100">
        Claustrophobic people are more productive thinking out of the box.
      </BoxWithTheme>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
