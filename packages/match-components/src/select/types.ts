import * as React from "react";

import { MarginProps } from "@twilio-labs/match-props";

import { SelectSize } from "./constants";

export type AnyEvent = MouseEvent | TouchEvent;

export interface SelectProps
  extends MarginProps,
    Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "size"> {
  name: string;
  label: string;
  type?: "single" | "multiple";
  size?: `${SelectSize}`;
  options: Option[];
  /** Sets the input as required. */
  required?: boolean;
  /** Disables the input. */
  disabled?: boolean;
  /** Visually hides the label. */
  hideLabel?: boolean;
  /** Sets the input's placeholder text. */
  placeholder?: string;
  /** Supporting validation instructions.  */
  helperText?: string;
  /** Error message to display when invalid. */
  error?: string;
  /** Overrides built in validation. */
  validate?: (value: string) => string | undefined;
  /** Disables built in validation. */
  noValidate?: boolean;
  fullWidth?: boolean;
}

export interface StyledSelectContainerProps {
  hasError: boolean;
  disabled: boolean;
}

export interface StyledSelectProps {
  inputSize?: `${SelectSize}`;
}

export interface Option {
  value?: string;
  label: string;
  selected?: boolean;
  disabled?: boolean;
  hidden?: boolean;
}
