import { MarginProps } from "@twilio-labs/match-props";
import { RadioSize } from "./constants";

export interface RadioProps
  extends MarginProps,
    Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  name: string;
  label: string;
  value: string;
  /** Sets the size of the radio button */
  size?: RadioSize;
  /** Disables the radio button. */
  disabled?: boolean;
  /** Sets the radio button as readonly. */
  readOnly?: boolean;
  /** Supporting information  */
  additional?: string;
  /** Sets the group to be required*/
  required?: boolean;
  /** Overrides built in validation. */
  validate?: (value: string) => string | undefined;
  /** Disables built in validation. */
  noValidate?: boolean;
}

export interface StyledRadioProps {
  hasError: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  checked?: boolean;
  radioSize?: RadioSize;
}

export interface StyledRadioWrapperProps extends MarginProps {
  radioSize?: RadioSize;
}

export interface RadioGroupProps
  extends MarginProps,
    Omit<React.HTMLAttributes<HTMLElement>, "size"> {
  children: Array<React.ReactElement<RadioProps>>;
  /** Sets the label for the group*/
  groupLabel: string;
  /** Sets the size of the radio group */
  size?: RadioSize;
  /** Sets the group to be required*/
  required?: boolean;
  /** Sets the group to disables*/
  disabled?: boolean;
  /** Sets the radio button as readonly. */
  readOnly?: boolean;
  /** Sets the group to disables*/
  helper?: string;
  /** Sets the alignment to horizontal */
  horizontal?: boolean;
  /** Overrides built in validation. */
  validate?: (value: string) => string | undefined;
  /** Disables built in validation. */
  noValidate?: boolean;
}

export interface StyledRadioGroupProps {
  horizontal?: boolean;
  hasError?: boolean;
}
