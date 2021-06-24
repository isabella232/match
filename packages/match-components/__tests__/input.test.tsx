import { render, screen, waitFor } from "@testing-library/react";
import { Formik } from "formik";
import { axe } from "jest-axe";
import * as React from "react";
import { withTheme } from "@twilio-labs/match-themes";
import { Input } from "../src";

const InputWithTheme = withTheme()(Input);

describe("Input", () => {
  test("required", async () => {
    render(
      <Formik
        validateOnMount
        initialValues={{ example: "" }}
        initialTouched={{ example: true }}
        onSubmit={() => {}}
      >
        <InputWithTheme name="example" label="Example" required />
      </Formik>
    );
    await waitFor(() =>
      expect(screen.getByRole("alert")).toHaveTextContent(
        /this field is required/i
      )
    );
  });

  test("too long", async () => {
    render(
      <Formik
        validateOnMount
        initialValues={{ example: "foobarbaz" }}
        initialTouched={{ example: true }}
        onSubmit={() => {}}
      >
        <InputWithTheme name="example" label="Example" maxLength={5} />
      </Formik>
    );
    await waitFor(() =>
      expect(screen.getByRole("alert")).toHaveTextContent(
        /must be less than 5 characters long/i
      )
    );
  });

  test("too short", async () => {
    render(
      <Formik
        validateOnMount
        initialValues={{ example: "foo" }}
        initialTouched={{ example: true }}
        onSubmit={() => {}}
      >
        <InputWithTheme name="example" label="Example" minLength={10} />
      </Formik>
    );
    await waitFor(() =>
      expect(screen.getByRole("alert")).toHaveTextContent(
        /must be at least 10 characters long/i
      )
    );
  });

  test("email mismatch", async () => {
    render(
      <Formik
        validateOnMount
        initialValues={{ example: "foo" }}
        initialTouched={{ example: true }}
        onSubmit={() => {}}
      >
        <InputWithTheme name="example" label="Example" type="email" />
      </Formik>
    );
    await waitFor(() =>
      expect(screen.getByRole("alert")).toHaveTextContent(
        /must be a valid email/i
      )
    );
  });

  test("url mismatch", async () => {
    render(
      <Formik
        validateOnMount
        initialValues={{ example: "foo" }}
        initialTouched={{ example: true }}
        onSubmit={() => {}}
      >
        <InputWithTheme name="example" label="Example" type="url" />
      </Formik>
    );
    await waitFor(() =>
      expect(screen.getByRole("alert")).toHaveTextContent(
        /must be a valid url/i
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
        <InputWithTheme name="example" label="Example" validate={validate} />
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
        <InputWithTheme
          name="example"
          label="Example"
          type="url"
          validate={validate}
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
        initialValues={{ example: "https://twilio.com" }}
        initialTouched={{ example: true }}
        onSubmit={() => {}}
        validate={validate}
      >
        <InputWithTheme name="example" label="Example" type="url" />
      </Formik>
    );
    await waitFor(() => expect(validate).toHaveBeenCalled());
  });

  test("accessibility violations", async () => {
    const { container } = render(
      <Formik initialValues={{ example: "" }} onSubmit={() => {}}>
        <InputWithTheme
          name="example"
          label="Name"
          placeholder="Your Name"
          additional="Enter your name."
        />
      </Formik>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  test("hidden label accessibility violations", async () => {
    const { container } = render(
      <Formik initialValues={{ example: "" }} onSubmit={() => {}}>
        <InputWithTheme
          name="example"
          label="Name"
          placeholder="Your Name"
          additional="Enter your name."
          hideLabel
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
        initialValues={{ example: "" }}
        initialTouched={{ example: true }}
        onSubmit={() => {}}
      >
        <InputWithTheme
          data-testid="example"
          name="example"
          label="Example"
          required
        />
      </Formik>
    );
    await screen.findByRole("alert");
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
          additional="Enter your name."
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
          additional="Enter your name."
        />
      </Formik>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
