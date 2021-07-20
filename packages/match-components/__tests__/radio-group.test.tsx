import { screen, render, waitFor } from "@testing-library/react";
import { Formik } from "formik";
import { axe } from "jest-axe";
import * as React from "react";

import { withTheme } from "@twilio-labs/match-themes";

import { Radio, RadioGroup } from "../src";

const RadioGroupWithTheme = withTheme()(RadioGroup);

describe("Radio Group", () => {
  test("different names warning", async () => {
    const warn = jest.spyOn(console, "warn").mockImplementation(() => {});
    render(
      <Formik initialValues={{ example: "" }} onSubmit={() => {}}>
        <RadioGroupWithTheme groupLabel="Select your favorite fruit:">
          <Radio name="example" value="apples" label="apples" />
          <Radio name="example_bad" value="bananas" label="bananas" />
          <Radio name="example" value="oranges" label="oranges" />
        </RadioGroupWithTheme>
      </Formik>
    );
    expect(warn).toBeCalled();
    warn.mockRestore();
  });

  test("required", async () => {
    render(
      <Formik
        initialValues={{ example: "" }}
        validateOnMount
        initialTouched={{ example: true }}
        onSubmit={() => {}}
      >
        <RadioGroupWithTheme groupLabel="Select your favorite fruit:" required>
          <Radio name="example" value="apples" label="apples" />
          <Radio name="example" value="bananas" label="bananas" />
          <Radio name="example" value="oranges" label="oranges" />
        </RadioGroupWithTheme>
      </Formik>
    );
    await waitFor(() =>
      expect(screen.getByRole("alert")).toHaveTextContent(
        /this field is required/i
      )
    );
  });

  test("custom validation", async () => {
    render(
      <Formik
        validateOnMount
        initialValues={{ example: "apples" }}
        initialTouched={{ example: true }}
        onSubmit={() => {}}
      >
        <RadioGroupWithTheme
          groupLabel="Select your favorite fruit:"
          required
          validate={(value) => {
            if (value === "apples") {
              return "yeah right";
            }
          }}
        >
          <Radio name="example" value="apples" label="apples" />
          <Radio name="example" value="bananas" label="bananas" />
          <Radio name="example" value="oranges" label="oranges" />
        </RadioGroupWithTheme>
      </Formik>
    );
    await waitFor(() =>
      expect(screen.getByRole("alert")).toHaveTextContent(/yeah right/i)
    );
  });

  test("no validation", async () => {
    const validate = jest.fn();
    render(
      <Formik
        initialValues={{ example: "" }}
        validateOnMount
        initialTouched={{ example: true }}
        onSubmit={() => {}}
      >
        <RadioGroupWithTheme
          groupLabel="Select your favorite fruit:"
          validate={validate}
          noValidate
        >
          <Radio name="example" value="apples" label="apples" />
          <Radio name="example" value="bananas" label="bananas" />
          <Radio name="example" value="oranges" label="oranges" />
        </RadioGroupWithTheme>
      </Formik>
    );
    await waitFor(() => expect(validate).not.toHaveBeenCalled());
  });

  test("valid", async () => {
    const validate = jest.fn();
    render(
      <Formik
        initialValues={{ example: "apples" }}
        validateOnMount
        initialTouched={{ example: true }}
        onSubmit={() => {}}
        validate={validate}
      >
        <RadioGroupWithTheme groupLabel="Select your favorite fruit:">
          <Radio name="example" value="apples" label="apples" />
          <Radio name="example" value="bananas" label="bananas" />
          <Radio name="example" value="oranges" label="oranges" />
        </RadioGroupWithTheme>
      </Formik>
    );
    await waitFor(() => expect(validate).toHaveBeenCalled());
  });

  test("accessibility violations", async () => {
    const { container } = render(
      <Formik initialValues={{ example: "" }} onSubmit={() => {}}>
        <RadioGroupWithTheme groupLabel="Example" additional="additional">
          <Radio
            name="example"
            value="apples"
            label="apples"
            additional="An apple a day keeps the doctor away"
          />
          <Radio
            name="example"
            value="bananas"
            label="bananas"
            additional="Goals are like bananas, they come in bunches"
          />
          <Radio
            name="example"
            value="oranges"
            label="oranges"
            additional="It's a color and a fruit!"
          />
        </RadioGroupWithTheme>
      </Formik>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  test("small accessibility violations", async () => {
    const { container } = render(
      <Formik initialValues={{ example: "" }} onSubmit={() => {}}>
        <RadioGroupWithTheme
          groupLabel="Example"
          additional="additional"
          size="small"
        >
          <Radio
            name="example"
            value="apples"
            label="apples"
            additional="An apple a day keeps the doctor away"
          />
          <Radio
            name="example"
            value="bananas"
            label="bananas"
            additional="Goals are like bananas, they come in bunches"
          />
          <Radio
            name="example"
            value="oranges"
            label="oranges"
            additional="It's a color and a fruit!"
          />
        </RadioGroupWithTheme>
      </Formik>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  test("readonly accessibility violations", async () => {
    const { container } = render(
      <Formik initialValues={{ example: "" }} onSubmit={() => {}}>
        <RadioGroupWithTheme
          groupLabel="Example"
          additional="additional"
          readOnly
        >
          <Radio
            name="example"
            value="apples"
            label="apples"
            additional="An apple a day keeps the doctor away"
          />
          <Radio
            name="example"
            value="bananas"
            label="bananas"
            additional="Goals are like bananas, they come in bunches"
          />
          <Radio
            name="example"
            value="oranges"
            label="oranges"
            additional="It's a color and a fruit!"
          />
        </RadioGroupWithTheme>
      </Formik>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  test("disabled accessibility violations", async () => {
    const { container } = render(
      <Formik initialValues={{ example: "" }} onSubmit={() => {}}>
        <RadioGroupWithTheme
          groupLabel="Example"
          additional="additional"
          disabled
        >
          <Radio
            name="example"
            value="apples"
            label="apples"
            additional="An apple a day keeps the doctor away"
          />
          <Radio
            name="example"
            value="bananas"
            label="bananas"
            additional="Goals are like bananas, they come in bunches"
          />
          <Radio
            name="example"
            value="oranges"
            label="oranges"
            additional="It's a color and a fruit!"
          />
        </RadioGroupWithTheme>
      </Formik>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  test("error accessibility violations", async () => {
    const { container } = render(
      <Formik
        initialValues={{ example: "" }}
        validateOnMount
        initialTouched={{ example: true }}
        onSubmit={() => {}}
      >
        <RadioGroupWithTheme
          groupLabel="Example"
          additional="additional"
          required
        >
          <Radio
            name="example"
            value="apples"
            label="apples"
            additional="An apple a day keeps the doctor away"
          />
          <Radio
            name="example"
            value="bananas"
            label="bananas"
            additional="Goals are like bananas, they come in bunches"
          />
          <Radio
            name="example"
            value="oranges"
            label="oranges"
            additional="It's a color and a fruit!"
          />
        </RadioGroupWithTheme>
      </Formik>
    );
    await waitFor(() => screen.findByRole("alert"));
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
