import { render, screen } from "@testing-library/react";
import * as React from "react";

import { VisuallyHidden } from "../src";

describe("Visually Hidden", () => {
  test("renders without taking up any space", () => {
    const { container } = render(
      <VisuallyHidden as="h2">You are here:</VisuallyHidden>
    );
    expect(container.clientHeight).toBe(0);
    expect(screen.getByText(/you are here/i)).toBeVisible();
  });
});
