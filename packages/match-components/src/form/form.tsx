import * as React from "react";
import { marginPropTypes } from "@twilio-labs/match-props";
import { StyledForm } from "./styles";
import type { FormProps } from "./types";

export const Form: React.FC<FormProps> = (props) => {
  return <StyledForm {...props} noValidate />;
};

Form.displayName = "Form";

Form.propTypes = {
  ...marginPropTypes,
};
