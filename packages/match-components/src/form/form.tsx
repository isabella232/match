import { Form as FormikForm } from "formik";
import * as React from "react";
import type { FormProps } from "./types";

export const Form: React.FC<FormProps> = (props) => {
  return <FormikForm {...props} noValidate />;
};

Form.displayName = "Form";
