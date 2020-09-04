import * as React from "react";
import { render } from "@testing-library/react";
import { axe } from "jest-axe";
import { withTheme } from "@twilio-labs/match-themes";
import { Wombat } from "../src";

const WombatWithTheme = withTheme()(Wombat);

describe("Wombat", () => {
  it("it should render Wombat with the brand color", (): void => {
    const { asFragment } = render(
      <WombatWithTheme droppings={["🌯", "🍦", "🍔"]} color="brand" />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("should have no accessibility violations", async () => {
    const { container } = render(
      <WombatWithTheme droppings={["🌯", "🍦", "🍔"]} color="brand" />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
