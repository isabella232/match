import { MarginProps } from "@twilio-labs/match-props";

export enum InputSize {
  NORMAL = "normal",
  SMALL = "small",
}

export interface InputProps extends MarginProps {
  name: string;
  type?: "text" | "email" | "tel" | "url" | "number" | "password";
  size?: InputSize;
  required?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  fullWidth?: boolean;
  label?: string;
  placeholder?: string;
  helper?: string;
  error?: string;
}

export interface StyledInputProps extends Pick<InputProps, "readOnly"> {
  inputSize?: InputSize;
}

export interface StyledLabelProps {
  inputDisabled: boolean;
}
