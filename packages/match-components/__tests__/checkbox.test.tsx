import { screen, render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Formik } from "formik";
import { axe } from "jest-axe";
import * as React from "react";

import { withTheme } from "@twilio-labs/match-themes";

import { Checkbox } from "../src/checkbox";

const CheckboxWithTheme = withTheme()(Checkbox);

describe("Checkbox", () => {
  test("onclick override", async () => {
    const onClick = jest.fn();
    render(
      <Formik initialValues={{}} onSubmit={() => {}}>
        <CheckboxWithTheme
          onClick={onClick}
          name="test"
          value="test"
          label="Test checkbox"
          additional="This describes the checkbox"
        />
      </Formik>
    );
    await userEvent.click(screen.getByLabelText(/test checkbox/i));
    await waitFor(() => expect(onClick).toBeCalled());
  });

  test("onclick focus", async () => {
    render(
      <Formik initialValues={{}} onSubmit={() => {}}>
        <CheckboxWithTheme
          name="test"
          value="test"
          label="Test checkbox"
          additional="This describes the checkbox"
        />
      </Formik>
    );
    await userEvent.click(screen.getByLabelText(/test checkbox/i));
    await waitFor(() =>
      expect(screen.getByLabelText(/test checkbox/i)).toHaveFocus()
    );
  });

  test("custom validation", async () => {
    const validate = jest.fn();
    render(
      <Formik
        validateOnMount
        initialValues={{ test: ["test"] }}
        initialTouched={{ test: true }}
        onSubmit={() => {}}
      >
        <CheckboxWithTheme
          name="test"
          value="test"
          label="Test checkbox"
          validate={validate}
          required
        />
      </Formik>
    );
    await waitFor(() => expect(validate).toHaveBeenCalledWith(["test"]));
  });

  test("no validation", async () => {
    const validate = jest.fn();
    render(
      <Formik
        validateOnMount
        initialValues={{}}
        initialTouched={{ test: true }}
        onSubmit={() => {}}
        validate={validate}
      >
        <CheckboxWithTheme
          name="test"
          value="test"
          label="Test checkbox"
          noValidate
          required
        />
      </Formik>
    );
    await waitFor(() => expect(validate).toHaveBeenCalled());
  });

  test("valid", async () => {
    render(
      <Formik
        validateOnMount
        initialValues={{ test: ["test"] }}
        initialTouched={{ test: true }}
        onSubmit={() => {}}
      >
        <CheckboxWithTheme
          name="test"
          value="test"
          label="Test checkbox"
          required
        />
      </Formik>
    );
    await waitFor(() =>
      expect(screen.getByRole("checkbox")).toHaveAttribute(
        "aria-invalid",
        "false"
      )
    );
  });

  test("accessibility violations", async () => {
    const { container } = render(
      <Formik initialValues={{}} onSubmit={() => {}}>
        <CheckboxWithTheme
          name="test"
          value="test"
          label="Test checkbox"
          additional="This describes the checkbox"
        />
      </Formik>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  test("error accessibility violations", async () => {
    const { container } = render(
      <Formik
        validateOnMount
        initialValues={{}}
        initialTouched={{ test: true }}
        onSubmit={() => {}}
      >
        <CheckboxWithTheme
          name="test"
          value="test"
          label="Test checkbox"
          required
        />
      </Formik>
    );
    await waitFor(() =>
      expect(screen.getByRole("checkbox")).toHaveAttribute(
        "aria-invalid",
        "true"
      )
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  test("readonly accessibility violations", async () => {
    const { container } = render(
      <Formik initialValues={{}} onSubmit={() => {}}>
        <CheckboxWithTheme
          name="test"
          value="test"
          label="Test checkbox"
          readOnly
        />
      </Formik>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  test("disabled accessibility violations", async () => {
    const { container } = render(
      <Formik initialValues={{}} onSubmit={() => {}}>
        <CheckboxWithTheme
          name="test"
          value="test"
          label="Test checkbox"
          disabled
        />
      </Formik>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
