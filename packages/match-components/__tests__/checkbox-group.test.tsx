import { screen, render, waitFor } from "@testing-library/react";
import { Formik } from "formik";
import { axe } from "jest-axe";
import * as React from "react";

import { withTheme } from "@twilio-labs/match-themes";

import { Checkbox, CheckboxGroup, CheckboxSize } from "../src/checkbox";

const CheckboxGroupWithTheme = withTheme()(CheckboxGroup);

describe("CheckboxGroup", () => {
  test("additional text", async () => {
    render(
      <Formik initialValues={{}} onSubmit={() => {}}>
        <CheckboxGroupWithTheme
          label="Test checkbox group"
          additional="Describes the fieldset"
        >
          <Checkbox
            name="test"
            value="test1"
            label="Test checkbox"
            additional="Describes the first checkbox"
          />
          <Checkbox name="test" value="test2" label="Test checkbox" />
        </CheckboxGroupWithTheme>
      </Formik>
    );
    expect(screen.getByText(/describes the fieldset/i)).toBeVisible();
    expect(screen.getByText(/describes the first checkbox/i)).toBeVisible();
  });

  test("error text", async () => {
    render(
      <Formik
        validateOnMount
        initialValues={{}}
        initialTouched={{ checking: true }}
        onSubmit={() => {}}
      >
        <CheckboxGroupWithTheme
          label="checkbox group"
          additional="Describes the fieldset"
          required
        >
          <Checkbox
            name="checking"
            value={"value1"}
            label={"test label 1"}
            additional={"Additional text"}
          />
          <Checkbox
            name="checking"
            value={"value2"}
            label={"test label 2"}
            additional={"Additional text"}
          />
          <Checkbox
            name="checking"
            value={"value3"}
            label={"test label 3"}
            additional={"Additional text"}
          />
        </CheckboxGroupWithTheme>
      </Formik>
    );

    await waitFor(() =>
      expect(screen.getByRole("alert")).toHaveTextContent(
        /this field is required/i
      )
    );
  });

  test("duplicate checkbox values", () => {
    const warn = jest.spyOn(console, "warn").mockImplementation(() => {});
    render(
      <Formik initialValues={{}} onSubmit={() => {}}>
        <CheckboxGroupWithTheme label="Duplicate names">
          <Checkbox name="test" value="test" label="Test checkbox" />
          <Checkbox name="test" value="test" label="Test checkbox" />
        </CheckboxGroupWithTheme>
      </Formik>
    );
    expect(warn).toBeCalled();
    warn.mockRestore();
  });

  test("accessibility violations", async () => {
    const { container } = render(
      <Formik initialValues={{}} onSubmit={() => {}}>
        <CheckboxGroupWithTheme
          label="Test checkbox group"
          additional="Describes the fieldset"
        >
          <Checkbox
            name="test"
            value="test1"
            label="Test checkbox"
            additional="Describes the checkbox"
          />
          <Checkbox
            name="test"
            value="test2"
            label="Test checkbox"
            additional="Describes the checkbox"
          />
        </CheckboxGroupWithTheme>
      </Formik>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  test("small accessibility violations", async () => {
    const { container } = render(
      <Formik initialValues={{}} onSubmit={() => {}}>
        <CheckboxGroupWithTheme
          label="Test checkbox group"
          additional="Describes the fieldset"
          size={CheckboxSize.SMALL}
        >
          <Checkbox
            name="test"
            value="test1"
            label="Test checkbox"
            additional="Describes the checkbox"
          />
          <Checkbox
            name="test"
            value="test2"
            label="Test checkbox"
            additional="Describes the checkbox"
          />
        </CheckboxGroupWithTheme>
      </Formik>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  test("error accessibility violations", async () => {
    const { container } = render(
      <Formik
        initialValues={{ checking: "" }}
        initialTouched={{ checking: true }}
        onSubmit={() => {}}
      >
        <CheckboxGroupWithTheme
          label="Test checkbox group"
          additional="Describes the fieldset"
        >
          <Checkbox
            name="test"
            value="test1"
            label="Test checkbox"
            additional="Describes the first checkbox"
          />
          <Checkbox name="test" value="test2" label="Test checkbox" />
        </CheckboxGroupWithTheme>
      </Formik>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  test("disabled accessibility violations", async () => {
    const { container } = render(
      <Formik initialValues={{}} onSubmit={() => {}}>
        <CheckboxGroupWithTheme label="Test checkbox group" disabled>
          <Checkbox name="test" value="test1" label="Test checkbox" />
          <Checkbox name="test" value="test2" label="Test checkbox" />
        </CheckboxGroupWithTheme>
      </Formik>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  test("readonly accessibility violations", async () => {
    const { container } = render(
      <Formik initialValues={{}} onSubmit={() => {}}>
        <CheckboxGroupWithTheme label="Test checkbox group" readOnly>
          <Checkbox name="test" value="test1" label="Test checkbox" />
          <Checkbox name="test" value="test2" label="Test checkbox" />
        </CheckboxGroupWithTheme>
      </Formik>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
