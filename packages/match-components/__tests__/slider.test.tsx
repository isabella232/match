import { render, screen, waitFor } from "@testing-library/react";
import { Formik } from "formik";
import { axe } from "jest-axe";
import * as React from "react";

import { withTheme } from "@twilio-labs/match-themes";

import { Slider } from "../src";

const SliderWithTheme = withTheme()(Slider);

describe("Slider", () => {
  test("required", async () => {
    render(
      <Formik
        validateOnMount
        initialValues={{ example: 0 }}
        initialTouched={{ example: true }}
        onSubmit={() => {}}
      >
        <SliderWithTheme
          name="example"
          label="Example"
          min={0}
          max={100}
          required
        />
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
        initialValues={{ example: 25 }}
        initialTouched={{ example: true }}
        onSubmit={() => {}}
      >
        <SliderWithTheme
          name="example"
          label="Example"
          min={0}
          max={100}
          validate={validate}
        />
      </Formik>
    );
    await waitFor(() => expect(validate).toHaveBeenCalledWith(25));
  });

  test("no validation", async () => {
    const validate = jest.fn();
    render(
      <Formik
        validateOnMount
        initialValues={{ example: 0 }}
        initialTouched={{ example: true }}
        onSubmit={() => {}}
      >
        <SliderWithTheme
          name="example"
          label="Example"
          validate={validate}
          min={0}
          max={100}
          noValidate
        />
      </Formik>
    );
    await waitFor(() => expect(validate).not.toHaveBeenCalled());
  });

  test("valid", async () => {
    const validate = jest.fn();
    render(
      <Formik
        validateOnMount
        initialValues={{ example: 0 }}
        initialTouched={{ example: true }}
        onSubmit={() => {}}
        validate={validate}
      >
        <SliderWithTheme name="example" label="Example" min={0} max={100} />
      </Formik>
    );
    await waitFor(() => expect(validate).toHaveBeenCalled());
  });

  test("renders max plus", () => {
    render(
      <Formik initialValues={{ example: 0 }} onSubmit={() => {}}>
        <SliderWithTheme
          name="example"
          label="Name"
          min={0}
          max={100}
          maxPlus
        />
      </Formik>
    );
    expect(screen.getByText("100+")).toBeInTheDocument();
  });

  test("accessibility violations", async () => {
    const { container } = render(
      <Formik initialValues={{ example: 0 }} onSubmit={() => {}}>
        <SliderWithTheme name="example" label="Name" min={0} max={100} />
      </Formik>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  test("centered accessibility violations", async () => {
    const { container } = render(
      <Formik initialValues={{ example: 0 }} onSubmit={() => {}}>
        <SliderWithTheme
          name="example"
          label="Name"
          alignment="center"
          min={0}
          max={100}
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
        initialValues={{ example: 0 }}
        initialTouched={{ example: true }}
        onSubmit={() => {}}
      >
        <SliderWithTheme
          data-testid="example"
          name="example"
          label="Example"
          min={0}
          max={100}
          required
        />
      </Formik>
    );
    await screen.findByRole("alert");
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  test("disabled accessibility violations", async () => {
    const { container } = render(
      <Formik initialValues={{ example: 0 }} onSubmit={() => {}}>
        <SliderWithTheme
          disabled
          name="example"
          label="Name"
          min={0}
          max={100}
        />
      </Formik>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
