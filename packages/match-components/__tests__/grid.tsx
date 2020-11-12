import "jest-styled-components";
import * as React from "react";
import { render } from "@testing-library/react";
import { withTheme } from "@twilio-labs/match-themes";
import { Grid, Cell } from "../src";

const GridWithTheme = withTheme()(Grid);

describe("Spaces", () => {
  test("snapshot", () => {
    const { container } = render(
      <GridWithTheme
        gridTemplateColumns="1fr 2fr"
        gridTemplateAreas="sidebar main"
        gridGap="scale100"
      >
        <Cell gridArea="sidebar" />
        <Cell gridArea="main" />
      </GridWithTheme>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
