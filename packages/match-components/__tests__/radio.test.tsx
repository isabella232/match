import * as React from "react";
import { render } from "@testing-library/react";
import { axe } from "jest-axe";
import { withTheme } from "@twilio-labs/match-themes";
import { Formik } from "formik";
import { Radio, RadioGroup } from "../src";

const RadioWithTheme = withTheme()(Radio);

describe("Radio", () => {
  test("radio additional text", () => {
    const { getByText } = render(
      <Formik initialValues={{ example: "" }} onSubmit={() => {}}>
        <RadioWithTheme
          name="example"
          value="example"
          label="Example"
          additional="additional"
        />
      </Formik>
    );
    expect(getByText(/additional/i)).toBeVisible();
  });

  test("radio accessibility violations", async () => {
    const { container } = render(
      <Formik initialValues={{ example: "" }} onSubmit={() => {}}>
        <RadioWithTheme
          name="example"
          value="example"
          label="example"
          additional="Additional Text"
        />
      </Formik>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  test("radio readonly accessibility violations", async () => {
    const { container } = render(
      <Formik initialValues={{ example: "" }} onSubmit={() => {}}>
        <RadioWithTheme
          readOnly
          name="example"
          value="example"
          label="Example"
          additional="Additional Text"
        />
      </Formik>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  test("radio disabled accessibility violations", async () => {
    const { container } = render(
      <Formik initialValues={{ example: "" }} onSubmit={() => {}}>
        <RadioWithTheme
          disabled
          name="example"
          label="example"
          value="example"
          additional="Additional text"
        />
      </Formik>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  test("radio error accessibility violations", async () => {
    const { container } = render(
      <Formik initialValues={{ example: "" }} onSubmit={() => {}}>
        <RadioWithTheme
          error
          name="example"
          value="example"
          label="example"
          additional="Additional Text"
        />
      </Formik>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});

const RadioGroupWithTheme = withTheme()(RadioGroup);

describe("Radio Group", () => {
  test("helper message", () => {
    const { getByText } = render(
      <Formik initialValues={{ example: "" }} onSubmit={() => {}}>
        <RadioGroupWithTheme
          name="example"
          groupLabel="Example"
          helper="helper"
        >
          <Radio
            error
            name="example"
            value="apples"
            label="apples"
            additional="An apple a day keeps the doctor away"
          />
          <Radio
            error
            name="example"
            value="bananas"
            label="bananas"
            additional="Goals are like bananas, they come in bunches"
          />
          <Radio
            error
            name="example"
            value="oranges"
            label="oranges"
            additional="It's a color and a fruit!"
          />
        </RadioGroupWithTheme>
      </Formik>
    );
    expect(getByText(/helper/i)).toBeVisible();
  });

  test("error message", () => {
    const { getByRole } = render(
      <Formik
        initialValues={{ group: "" }}
        validateOnMount
        initialTouched={{ group: true }}
        onSubmit={() => {}}
      >
        <RadioGroup
          groupLabel="Select your favorite fruit:"
          name="example"
          required
        >
          <Radio name="example" value="apples" label="apples" />
          <Radio name="example" value="bananas" label="bananas" />
          <Radio name="example" value="oranges" label="oranges" />
        </RadioGroup>
      </Formik>
    );
    expect(getByRole("alert")).toHaveTextContent(/"this field is required"/i);
  });

  test("accessibility violations", async () => {
    const { container } = render(
      <Formik initialValues={{ example: "" }} onSubmit={() => {}}>
        <RadioGroupWithTheme
          name="example"
          groupLabel="Example"
          helper="helper"
        >
          <Radio
            error
            name="example"
            value="apples"
            label="apples"
            additional="An apple a day keeps the doctor away"
          />
          <Radio
            error
            name="example"
            value="bananas"
            label="bananas"
            additional="Goals are like bananas, they come in bunches"
          />
          <Radio
            error
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
          name="example"
          groupLabel="Example"
          helper="helper"
          readOnly
        >
          <Radio
            error
            name="example"
            value="apples"
            label="apples"
            additional="An apple a day keeps the doctor away"
          />
          <Radio
            error
            name="example"
            value="bananas"
            label="bananas"
            additional="Goals are like bananas, they come in bunches"
          />
          <Radio
            error
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
          name="example"
          groupLabel="Example"
          helper="helper"
          disabled
        >
          <Radio
            error
            name="example"
            value="apples"
            label="apples"
            additional="An apple a day keeps the doctor away"
          />
          <Radio
            error
            name="example"
            value="bananas"
            label="bananas"
            additional="Goals are like bananas, they come in bunches"
          />
          <Radio
            error
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
          name="example"
          groupLabel="Example"
          helper="helper"
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
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
