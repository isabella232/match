import * as React from "react";
import { render } from "@testing-library/react";
import { axe } from "jest-axe";
import { withTheme } from "@twilio-labs/match-themes";
import { Radio, RadioGroup } from "../src";

const RadioWithTheme = withTheme()(Radio);

describe("Radio", () => {
  test("radio additional text", () => {
    const { getByText } = render(
      <RadioWithTheme
        name="example"
        value="example"
        label="Example"
        additional="additional"
      />
    );
    expect(getByText(/additional/i)).toBeVisible();
  });

  test("radio accessibility violations", async () => {
    const { container } = render(
      <RadioWithTheme
        name="example"
        value="example"
        label="example"
        additional="Additional Text"
      />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  test("radio readonly accessibility violations", async () => {
    const { container } = render(
      <RadioWithTheme
        readOnly
        name="example"
        value="example"
        label="Example"
        additional="Additional Text"
      />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  test("radio disabled accessibility violations", async () => {
    const { container } = render(
      <RadioWithTheme
        disabled
        name="example"
        label="example"
        value="example"
        additional="Additional text"
      />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  test("radio error accessibility violations", async () => {
    const { container } = render(
      <RadioWithTheme
        error
        name="example"
        value="example"
        label="example"
        additional="Additional Text"
      />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});

const RadioGroupWithTheme = withTheme()(RadioGroup);

describe("Radio Group", () => {
  test("helper message", () => {
    const { getByText } = render(
      <RadioGroupWithTheme
        name="example"
        value="example"
        groupLabel="Example"
        helper="helper"
      >
        <Radio
          error
          name="apples"
          value="apples"
          label="apples"
          additional="An apple a day keeps the doctor away"
        />
        <Radio
          error
          name="bananas"
          value="bananas"
          label="bananas"
          additional="Goals are like bananas, they come in bunches"
        />
        <Radio
          error
          name="oranges"
          value="oranges"
          label="oranges"
          additional="It's a color and a fruit!"
        />
      </RadioGroupWithTheme>
    );
    expect(getByText(/helper/i)).toBeVisible();
  });

  test("error message", () => {
    const { getByRole } = render(
      <RadioGroupWithTheme
        name="example"
        value="example"
        groupLabel="Example"
        helper="helper"
        error="error"
      >
        <Radio
          error
          name="apples"
          value="apples"
          label="apples"
          additional="An apple a day keeps the doctor away"
        />
        <Radio
          error
          name="bananas"
          value="bananas"
          label="bananas"
          additional="Goals are like bananas, they come in bunches"
        />
        <Radio
          error
          name="oranges"
          value="oranges"
          label="oranges"
          additional="It's a color and a fruit!"
        />
      </RadioGroupWithTheme>
    );
    expect(getByRole("alert")).toHaveTextContent(/error/i);
  });

  test("accessibility violations", async () => {
    const { container } = render(
      <RadioGroupWithTheme
        name="example"
        value="example"
        groupLabel="Example"
        helper="helper"
      >
        <Radio
          error
          name="apples"
          value="apples"
          label="apples"
          additional="An apple a day keeps the doctor away"
        />
        <Radio
          error
          name="bananas"
          value="bananas"
          label="bananas"
          additional="Goals are like bananas, they come in bunches"
        />
        <Radio
          error
          name="oranges"
          value="oranges"
          label="oranges"
          additional="It's a color and a fruit!"
        />
      </RadioGroupWithTheme>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  test("readonly accessibility violations", async () => {
    const { container } = render(
      <RadioGroupWithTheme
        name="example"
        value="example"
        groupLabel="Example"
        helper="helper"
        readOnly
      >
        <Radio
          error
          name="apples"
          value="apples"
          label="apples"
          additional="An apple a day keeps the doctor away"
        />
        <Radio
          error
          name="bananas"
          value="bananas"
          label="bananas"
          additional="Goals are like bananas, they come in bunches"
        />
        <Radio
          error
          name="oranges"
          value="oranges"
          label="oranges"
          additional="It's a color and a fruit!"
        />
      </RadioGroupWithTheme>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  test("disabled accessibility violations", async () => {
    const { container } = render(
      <RadioGroupWithTheme
        name="example"
        value="example"
        groupLabel="Example"
        helper="helper"
        disabled
      >
        <Radio
          error
          name="apples"
          value="apples"
          label="apples"
          additional="An apple a day keeps the doctor away"
        />
        <Radio
          error
          name="bananas"
          value="bananas"
          label="bananas"
          additional="Goals are like bananas, they come in bunches"
        />
        <Radio
          error
          name="oranges"
          value="oranges"
          label="oranges"
          additional="It's a color and a fruit!"
        />
      </RadioGroupWithTheme>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  test("error accessibility violations", async () => {
    const { container } = render(
      <RadioGroupWithTheme
        name="example"
        value="example"
        groupLabel="Example"
        helper="helper"
        error="error"
      >
        <Radio
          error
          name="apples"
          value="apples"
          label="apples"
          additional="An apple a day keeps the doctor away"
        />
        <Radio
          error
          name="bananas"
          value="bananas"
          label="bananas"
          additional="Goals are like bananas, they come in bunches"
        />
        <Radio
          error
          name="oranges"
          value="oranges"
          label="oranges"
          additional="It's a color and a fruit!"
        />
      </RadioGroupWithTheme>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
