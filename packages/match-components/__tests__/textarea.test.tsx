import * as React from "react";
import { render } from "@testing-library/react";
import { axe } from "jest-axe";
import { withTheme } from "@twilio-labs/match-themes";
import { Textarea } from "../src";

const TextareaWithTheme = withTheme()(Textarea);

describe("Textarea", () => {
  test("helper message", () => {
    const { getByText } = render(
      <TextareaWithTheme name="example" label="Example" helper="helper" />
    );
    expect(getByText(/helper/i)).toBeVisible();
  });

  test("error message", () => {
    const { queryByText, getByRole } = render(
      <TextareaWithTheme
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
      <TextareaWithTheme
        name="example"
        label="Example"
        placeholder="Example"
        helper="Write something"
      />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  test("readonly accessibility violations", async () => {
    const { container } = render(
      <TextareaWithTheme
        readOnly
        name="example"
        label="Example"
        placeholder="Example"
        helper="Write something"
      />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  test("disabled accessibility violations", async () => {
    const { container } = render(
      <TextareaWithTheme
        disabled
        name="example"
        label="Example"
        placeholder="Example"
        helper="Write something"
      />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  test("error accessibility violations", async () => {
    const { container } = render(
      <TextareaWithTheme
        error="You must write something"
        name="example"
        label="Example"
        placeholder="Example"
        helper="Write something"
      />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
