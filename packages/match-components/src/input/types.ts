import { MarginProps } from "@twilio-labs/match-props";
import { InputSize } from "./constants";

export interface InputProps
  extends MarginProps,
    Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  name: string;
  label: string;
  type?: "text" | "email" | "tel" | "url" | "number" | "password";
  size?: InputSize;
  required?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  hideLabel?: boolean;
  placeholder?: string;
  helper?: string;
  error?: string;
}

export interface StyledInputProps extends Pick<InputProps, "readOnly"> {
  inputSize?: InputSize;
}
