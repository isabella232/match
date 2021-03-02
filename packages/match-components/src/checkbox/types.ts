import { MarginProps } from "@twilio-labs/match-props";
import { CheckboxSize } from "./constants";

export interface CheckboxProps
  extends MarginProps,
    Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  name: string;
  value: string;
  label?: string;
  /** Whether the field is required */
  required?: boolean;
  /** Sets the size of the checkbox */
  size?: CheckboxSize;
  /** Disables the checkbox. */
  disabled?: boolean;
  /** Sets the checkbox as readonly. */
  readOnly?: boolean;
  /** Supporting information  */
  additional?: string;
  /** Marks the checkbox as checked*/
  checked?: boolean;
}

export interface HiddenInputProps {
  name: string;
  value: string;
}

export interface StyledCheckboxWrapperProps extends MarginProps {
  size?: CheckboxSize;
}

export interface StyledCheckboxLabelProps extends MarginProps {
  additional?: string;
  label?: string;
}

export interface CheckboxGroupProps extends MarginProps {
  label: string;
  name?: string;
  size?: CheckboxSize;
  disabled?: boolean;
  readOnly?: boolean;
  required?: boolean;
  additional?: string;
}
