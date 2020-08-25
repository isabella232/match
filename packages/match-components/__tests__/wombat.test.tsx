import * as React from "react";
import * as renderer from "react-test-renderer";
import { render } from "react-dom";
import { axe } from "jest-axe";
import { Wombat } from "../src";

describe("Wombat", () => {
  it("it should render Wombat with the brand color", (): void => {
    const tree = renderer
      .create(<Wombat droppings={["🌯", "🍦", "🍔"]} color="brand" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should have no accessibility violations", async () => {
    const container = document.createElement("div");
    container.setAttribute("role", "main");
    document.body.append(container);
    render(<Wombat droppings={["🌯", "🍦", "🍔"]} color="brand" />, container);
    const results = await axe(document.body);
    expect(results).toHaveNoViolations();
  });
});
