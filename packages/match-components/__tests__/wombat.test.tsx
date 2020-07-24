import * as React from "react";
import * as renderer from "react-test-renderer";
import { render } from "react-dom";
import { axe, toHaveNoViolations } from "jest-axe";
import { Wombat } from "../src";
expect.extend(toHaveNoViolations);

describe("Wombat", () => {
  it("it should render Wombat with the color burrito", (): void => {
    const tree = renderer
      .create(<Wombat droppings={["🌯", "🍦", "🍔"]} color="burrito" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should have no accessibility violations", async () => {
    const container = document.createElement("div");
    container.setAttribute("role", "main");
    document.body.append(container);
    render(
      <Wombat droppings={["🌯", "🍦", "🍔"]} color="burrito" />,
      container
    );
    const results = await axe(document.body);
    expect(results).toHaveNoViolations();
  });
});
