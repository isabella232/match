import * as React from "react";
import { Formik } from "formik";
import { axe } from "jest-axe";
import { render, screen, waitFor } from "@testing-library/react";

import { withTheme } from "@twilio-labs/match-themes";

import { Option, Select } from "../src";

const SelectWithTheme = withTheme()(Select);

describe("Select", () => {
  const options: Option[] = [
    { value: "first", label: "First Option" },
    { value: "second", label: "Second Option" },
  ];

  test("required", async () => {
    render(
      <Formik
        validateOnMount
        initialValues={{ example: "" }}
        initialTouched={{ example: true }}
        onSubmit={() => {}}
      >
        <SelectWithTheme
          name="example"
          label="Example"
          options={options}
          required
        ></SelectWithTheme>
      </Formik>
    );
    await waitFor(() =>
      expect(screen.getByRole("alert")).toHaveTextContent(
        /this field is required/i
      )
    );
  });

  test("custom validation", async () => {
    const validate = jest.fn();
    render(
      <Formik
        validateOnMount
        initialValues={{ example: "foo" }}
        initialTouched={{ example: true }}
        onSubmit={() => {}}
      >
        <SelectWithTheme
          name="example"
          label="Example"
          validate={validate}
          options={options}
        ></SelectWithTheme>
      </Formik>
    );
    await waitFor(() => expect(validate).toHaveBeenCalledWith("foo"));
  });

  test("no validation", async () => {
    const validate = jest.fn();
    render(
      <Formik
        validateOnMount
        initialValues={{ example: "foo" }}
        initialTouched={{ example: true }}
        onSubmit={() => {}}
      >
        <SelectWithTheme
          name="example"
          label="Example"
          validate={validate}
          options={options}
          noValidate
        ></SelectWithTheme>
      </Formik>
    );
    await waitFor(() => expect(validate).not.toHaveBeenCalled());
  });

  test("valid", async () => {
    const validate = jest.fn();
    render(
      <Formik
        validateOnMount
        initialValues={{ example: "https://twilio.com" }}
        initialTouched={{ example: true }}
        onSubmit={() => {}}
        validate={validate}
      >
        <SelectWithTheme
          name="example"
          label="Example"
          options={options}
        ></SelectWithTheme>
      </Formik>
    );
    await waitFor(() => expect(validate).toHaveBeenCalled());
  });

  test("accessibility violations", async () => {
    const { container } = render(
      <Formik initialValues={{ example: "" }} onSubmit={() => {}}>
        <SelectWithTheme
          name="example"
          label="Name"
          placeholder="Your Name"
          helperText="Enter your name."
          options={options}
        ></SelectWithTheme>
      </Formik>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  test("hidden label accessibility violations", async () => {
    const { container } = render(
      <Formik initialValues={{ example: "" }} onSubmit={() => {}}>
        <SelectWithTheme
          name="example"
          label="Name"
          placeholder="Your Name"
          helperText="Enter your name."
          options={options}
          hideLabel
        ></SelectWithTheme>
      </Formik>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  test("error accessibility violations", async () => {
    const { container } = render(
      <Formik
        validateOnMount
        initialValues={{ example: "" }}
        initialTouched={{ example: true }}
        onSubmit={() => {}}
      >
        <SelectWithTheme
          data-testid="example"
          name="example"
          label="Example"
          options={options}
          required
        ></SelectWithTheme>
      </Formik>
    );
    await screen.findByRole("alert");
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  test("disabled accessibility violations", async () => {
    const { container } = render(
      <Formik initialValues={{ example: "" }} onSubmit={() => {}}>
        <SelectWithTheme
          disabled
          name="example"
          label="Name"
          placeholder="Your Name"
          helperText="Enter your name."
          options={options}
        ></SelectWithTheme>
      </Formik>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
