import { MarginProps } from "@twilio-labs/match-props";
import { CheckboxSize } from "./constants";

export interface CheckboxProps
  extends MarginProps,
    Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  name: string;
  label: string;
  value: string;
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

export interface StyledCheckboxProps {
  hasError: boolean;
}

export interface StyledCheckboxWrapperProps extends MarginProps {
  size?: CheckboxSize;
}

export interface StyledCheckboxLabelProps extends MarginProps {
  size?: CheckboxSize;
}
