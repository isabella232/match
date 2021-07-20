import { render, screen } from "@testing-library/react";
import { Formik } from "formik";
import * as React from "react";

import { withTheme } from "@twilio-labs/match-themes";

import { Form } from "../src/form";

const FormWithTheme = withTheme()(Form);

describe("Form", () => {
  test("has novalidate property", () => {
    render(
      <Formik initialValues={{}} onSubmit={() => {}}>
        <FormWithTheme data-testid="form" />
      </Formik>
    );
    expect(screen.getByTestId("form")).toHaveAttribute("novalidate");
  });
});
