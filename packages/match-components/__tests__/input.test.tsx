import * as React from "react";
import { render } from "@testing-library/react";
import { axe } from "jest-axe";
import { withTheme } from "@twilio-labs/match-themes";
import { Input } from "../src";

const InputWithTheme = withTheme()(Input);

describe("Input", () => {
  test("helper message", () => {
    const { getByText } = render(
      <InputWithTheme name="example" label="Example" helper="helper" />
    );
    expect(getByText(/helper/i)).toBeVisible();
  });

  test("error message", () => {
    const { queryByText, getByRole } = render(
      <InputWithTheme
        name="example"
        label="Example"
        helper="helper"
        error="error"
      />
    );
    expect(queryByText(/helper/i)).toBeNull();
    expect(getByRole("alert")).toHaveTextContent(/error/i);
  });

  test("accessibility violations", async () => {
    const { container } = render(
      <InputWithTheme
        name="name"
        label="Name"
        placeholder="Your Name"
        helper="Enter your name."
      />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  test("readonly accessibility violations", async () => {
    const { container } = render(
      <InputWithTheme
        readOnly
        name="name"
        label="Name"
        placeholder="Your Name"
        helper="Enter your name."
      />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  test("disabled accessibility violations", async () => {
    const { container } = render(
      <InputWithTheme
        disabled
        name="name"
        label="Name"
        placeholder="Your Name"
        helper="Enter your name."
      />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  test("error accessibility violations", async () => {
    const { container } = render(
      <InputWithTheme
        error="You must enter your name."
        name="name"
        label="Name"
        placeholder="Your Name"
        helper="Enter your name."
      />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
