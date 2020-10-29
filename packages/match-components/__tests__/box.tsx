import "jest-styled-components";
import * as React from "react";
import { render } from "@testing-library/react";
import { withTheme } from "@twilio-labs/match-themes";
import { Box } from "../src";

const BoxWithTheme = withTheme()(Box);

describe("Spaces", () => {
  it("it should render with padding equal to space20", (): void => {
    const padding = render(
      <BoxWithTheme padding="space20">space20</BoxWithTheme>
    );
    expect(padding).toMatchSnapshot();
  });
});
