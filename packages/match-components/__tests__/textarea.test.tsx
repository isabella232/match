import * as React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from "jest-axe";
import { withTheme } from "@twilio-labs/match-themes";
import { Formik } from "formik";
import { Textarea } from "../src";

const TextareaWithTheme = withTheme()(Textarea);

describe("Textarea", () => {
  test("helper message", () => {
    const { getByText } = render(
      <Formik initialValues={{ example: "" }} onSubmit={() => {}}>
        <TextareaWithTheme name="example" label="Example" helper="helper" />
      </Formik>
    );
    expect(getByText(/helper/i)).toBeVisible();
  });

  test("error message", async () => {
    const { queryByText, getByRole } = render(
      <Formik initialValues={{ example: "" }} onSubmit={() => {}}>
        <TextareaWithTheme
          data-testid="example"
          name="example"
          label="Example"
          helper="helper"
          minLength={10}
        />
      </Formik>
    );
    await userEvent.type(screen.getByTestId("example"), "hi");
    await userEvent.tab();
    await waitFor(() =>
      expect(getByRole("alert")).toHaveTextContent(
        /must be at least 10 characters/i
      )
    );
    expect(queryByText(/helper/i)).not.toBeInTheDocument();
  });

  test("accessibility violations", async () => {
    const { container } = render(
      <Formik initialValues={{ example: "" }} onSubmit={() => {}}>
        <TextareaWithTheme
          name="example"
          label="Example"
          placeholder="Example"
          helper="Write something"
        />
      </Formik>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  test("readonly accessibility violations", async () => {
    const { container } = render(
      <Formik initialValues={{ example: "" }} onSubmit={() => {}}>
        <TextareaWithTheme
          readOnly
          name="example"
          label="Example"
          placeholder="Example"
          helper="Write something"
        />
      </Formik>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  test("disabled accessibility violations", async () => {
    const { container } = render(
      <Formik initialValues={{ example: "" }} onSubmit={() => {}}>
        <TextareaWithTheme
          disabled
          name="example"
          label="Example"
          placeholder="Example"
          helper="Write something"
        />
      </Formik>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
