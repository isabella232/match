import { MarginProps } from "@twilio-labs/match-props";

import { InputSize } from "./constants";

export interface InputProps
  extends MarginProps,
    Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  name: string;
  label: string;
  type?: "text" | "email" | "tel" | "url" | "number" | "password";
  size?: `${InputSize}`;
  /** Sets the input as required. */
  required?: boolean;
  /** Disables the input. */
  disabled?: boolean;
  /** Sets the input as readonly. */
  readOnly?: boolean;
  /** Visually hides the label. */
  hideLabel?: boolean;
  /** Sets the input's placeholder text. */
  placeholder?: string;
  /** Supporting validation instructions.  */
  additional?: string;
  /** Error message to display when invalid. */
  error?: string;
  /** Overrides built in validation. */
  validate?: (value: string) => string | undefined;
  /** Disables built in validation. */
  noValidate?: boolean;
  minLength?: number;
  maxLength?: number;
}

export interface StyledInputContainerProps {
  hasError: boolean;
  disabled: boolean;
}

export interface StyledInputProps extends Pick<InputProps, "readOnly"> {
  inputSize?: `${InputSize}`;
}
