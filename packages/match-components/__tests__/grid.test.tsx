import { render } from "@testing-library/react";
import * as React from "react";
import { withTheme } from "@twilio-labs/match-themes";
import { Grid, Cell } from "../src";

const GridWithTheme = withTheme()(Grid);

describe("Grid", () => {
  test("renders a grid", () => {
    const { getByTestId } = render(
      <GridWithTheme data-testid="grid" gridTemplateColumns="1fr 1fr">
        <Cell />
        <Cell />
      </GridWithTheme>
    );
    expect(getByTestId("grid")).toHaveStyle({
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
    });
  });
});
