import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Formik } from "formik";
import { axe } from "jest-axe";
import * as React from "react";

import { withTheme } from "@twilio-labs/match-themes";

import { Textarea } from "../src";

const TextareaWithTheme = withTheme()(Textarea);

describe("Textarea", () => {
  test("smart resize", async () => {
    render(
      <Formik
        validateOnMount
        initialValues={{ example: "" }}
        initialTouched={{ example: true }}
        onSubmit={() => {}}
      >
        <TextareaWithTheme name="example" label="Example" resize="smart" />
      </Formik>
    );
    await userEvent.type(screen.getAllByRole("textbox")[0], "foobars");
    await waitFor(() =>
      expect(screen.getAllByRole("textbox").pop()).toHaveValue("foobars")
    );
  });

  test("required", async () => {
    render(
      <Formik
        validateOnMount
        initialValues={{ example: "" }}
        initialTouched={{ example: true }}
        onSubmit={() => {}}
      >
        <TextareaWithTheme name="example" label="Example" required />
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
        <TextareaWithTheme name="example" label="Example" maxLength={5} />
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
        <TextareaWithTheme name="example" label="Example" minLength={10} />
      </Formik>
    );
    await waitFor(() =>
      expect(screen.getByRole("alert")).toHaveTextContent(
        /must be at least 10 characters long/i
      )
    );
  });

  test("custom validation", async () => {
    const validate = jest.fn();
    render(
      <Formik
        validateOnMount
        initialValues={{ example: "test content" }}
        initialTouched={{ example: true }}
        onSubmit={() => {}}
      >
        <TextareaWithTheme name="example" label="Example" validate={validate} />
      </Formik>
    );
    await waitFor(() => expect(validate).toHaveBeenCalledWith("test content"));
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
        <TextareaWithTheme
          name="example"
          label="Example"
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
        initialValues={{ example: "blahblahblah" }}
        initialTouched={{ example: true }}
        onSubmit={() => {}}
        validate={validate}
      >
        <TextareaWithTheme name="example" label="Example" />
      </Formik>
    );
    await waitFor(() => expect(validate).toHaveBeenCalled());
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

  test("hidden label accessibility violations", async () => {
    const { container } = render(
      <Formik initialValues={{ example: "" }} onSubmit={() => {}}>
        <TextareaWithTheme
          name="example"
          label="Example"
          placeholder="Example"
          additional="Write something"
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
        <TextareaWithTheme
          name="example"
          label="Example"
          placeholder="Example"
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
