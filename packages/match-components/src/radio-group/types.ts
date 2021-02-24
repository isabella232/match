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
  /** Marks that the radio button has an error*/
  error?: boolean;
  /** Sets the group to be required*/
  required?: boolean;
  /** Marks the radio button as checked*/
  checked?: boolean;
  /** Disables built in validation. */
  noValidate?: boolean;
}

export interface HiddenRadioProps extends RadioProps {
  radioSize?: RadioSize;
}

export interface StyledRadioProps {
  hasError: boolean;
}

export interface StyledRadioWrapperProps extends MarginProps {
  radioSize?: RadioSize;
}

export interface RadioGroupProps
  extends MarginProps,
    Omit<React.HTMLAttributes<HTMLElement>, "size"> {
  children: Array<React.ReactElement<RadioProps>>;
  name: string;
  /** Sets the label for the group*/
  groupLabel: string;
  /** Sets the size of the radio group */
  size?: RadioSize;
  /** Sets the group to be required*/
  required?: boolean;
  /** Sets the group to disables*/
  disabled?: boolean;
  /** Sets the error message for a group*/
  error?: string;
  /** Sets the radio button as readonly. */
  readOnly?: boolean;
  /** Sets the group to disables*/
  helper?: string;
  /** Sets the alignment to vertical */
  vertical?: boolean;
  /** Disables built in validation. */
  noValidate?: boolean;
}

export interface StyledRadioGroupProps {
  vertical?: boolean;
}
