import * as React from "react";
import { render } from "@testing-library/react";
import { VisuallyHidden } from "../src";

describe("Visually Hidden", () => {
  test("renders without taking up any space", () => {
    const { container, getByText } = render(
      <VisuallyHidden as="h2">You are here:</VisuallyHidden>
    );
    expect(container.clientHeight).toBe(0);
    expect(getByText(/you are here/i)).toBeVisible();
  });
});
