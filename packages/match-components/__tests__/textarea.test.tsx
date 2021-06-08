import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Formik } from "formik";
import { axe } from "jest-axe";
import * as React from "react";
import { withTheme } from "@twilio-labs/match-themes";
import { Textarea } from "../src";

const TextareaWithTheme = withTheme()(Textarea);

describe("Textarea", () => {
  test("additional message", () => {
    const { getByText } = render(
      <Formik initialValues={{ example: "" }} onSubmit={() => {}}>
        <TextareaWithTheme
          name="example"
          label="Example"
          additional="additional"
        />
      </Formik>
    );
    expect(getByText(/additional/i)).toBeVisible();
  });

  test("error message", async () => {
    const { container } = render(
      <Formik initialValues={{ example: "" }} onSubmit={() => {}}>
        <TextareaWithTheme
          data-testid="example"
          name="example"
          label="Example"
          additional="additional"
          validate={() => "error message"}
        />
      </Formik>
    );
    await userEvent.type(screen.getByTestId("example"), "foo");
    await userEvent.tab();
    await waitFor(() =>
      expect(screen.getByRole("alert")).toHaveTextContent(/error message/i)
    );
    expect(screen.queryByText(/additional/i)).not.toBeInTheDocument();
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  test("accessibility violations", async () => {
    const { container } = render(
      <Formik initialValues={{ example: "" }} onSubmit={() => {}}>
        <TextareaWithTheme
          name="example"
          label="Example"
          placeholder="Example"
          additional="Write something"
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
          additional="Write something"
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
          additional="Write something"
        />
      </Formik>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
