import * as React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from "jest-axe";
import { withTheme } from "@twilio-labs/match-themes";
import { Formik } from "formik";
import { Input } from "../src";

const InputWithTheme = withTheme()(Input);

describe("Input", () => {
  test("helper message", () => {
    render(
      <Formik initialValues={{ example: "" }} onSubmit={() => {}}>
        <InputWithTheme name="example" label="Example" helper="helper" />
      </Formik>
    );
    expect(screen.getByText(/helper/i)).toBeVisible();
  });

  test("error message", async () => {
    const { container } = render(
      <Formik initialValues={{ example: "" }} onSubmit={() => {}}>
        <InputWithTheme
          data-testid="example"
          name="example"
          label="Example"
          helper="helper"
          validate={() => "error message"}
        />
      </Formik>
    );
    await userEvent.type(screen.getByTestId("example"), "foo");
    await userEvent.tab();
    await waitFor(() =>
      expect(screen.getByRole("alert")).toHaveTextContent(/error message/i)
    );
    expect(screen.queryByText(/helper/i)).not.toBeInTheDocument();
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  test("accessibility violations", async () => {
    const { container } = render(
      <Formik initialValues={{ example: "" }} onSubmit={() => {}}>
        <InputWithTheme
          name="example"
          label="Name"
          placeholder="Your Name"
          helper="Enter your name."
        />
      </Formik>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  test("readonly accessibility violations", async () => {
    const { container } = render(
      <Formik initialValues={{ example: "" }} onSubmit={() => {}}>
        <InputWithTheme
          readOnly
          name="example"
          label="Name"
          placeholder="Your Name"
          helper="Enter your name."
        />
      </Formik>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  test("disabled accessibility violations", async () => {
    const { container } = render(
      <Formik initialValues={{ example: "" }} onSubmit={() => {}}>
        <InputWithTheme
          disabled
          name="example"
          label="Name"
          placeholder="Your Name"
          helper="Enter your name."
        />
      </Formik>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});