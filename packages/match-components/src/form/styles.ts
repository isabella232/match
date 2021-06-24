import { Form } from "formik";
import styled from "styled-components";
import { space } from "styled-system";
import type { FormProps } from "./types";

export const StyledForm = styled(Form).withConfig({
  shouldForwardProp: (prop, validate) => validate(prop),
})<FormProps>`
  ${space}
`;
