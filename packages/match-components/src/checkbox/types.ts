import { MarginProps } from "@twilio-labs/match-props";
import { CheckboxSize } from "./constants";

export interface CheckboxProps
  extends MarginProps,
    Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  name: string;
  value: string;
  label: string;
  /** Whether the checkbox is a member of a group
   * @ignore
   */
  isGrouped?: boolean;
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
  /** Overrides built in validation. */
  validate?: (value: Array<string>) => string | undefined;
  /** Disables built in validation. */
  noValidate?: boolean;
  /** Allow overriding click-focus workaround for firefox */
  onClick?: (event: React.MouseEvent<HTMLInputElement>) => void;
}

export interface StyledCheckboxProps {
  /** Field contains an error */
  hasError?: boolean;
  /** Whether the field is required */
  required?: boolean;
  /** Sets the size of the checkbox */
  size?: CheckboxSize;
  /** Disables the checkbox. */
  disabled?: boolean;
  /** Sets the checkbox as readonly. */
  readOnly?: boolean;
  /** Marks the checkbox as checked*/
  checked?: boolean;
}

export interface StyledCheckboxWrapperProps extends MarginProps {
  size?: CheckboxSize;
}

export interface StyledCheckboxLabelProps {
  size?: CheckboxSize;
}

export interface HiddenInputProps {
  onClick?: (event: React.MouseEvent<HTMLInputElement>) => void;
}

export interface CheckboxGroupProps
  extends MarginProps,
    Omit<React.FieldsetHTMLAttributes<HTMLFieldSetElement>, "size"> {
  children: Array<React.ReactElement<CheckboxProps>>;
  horizontal?: boolean;
  label: string;
  /** Supporting information  */
  additional?: string;
  size?: CheckboxSize;
  disabled?: boolean;
  readOnly?: boolean;
  required?: boolean;
  /** Overrides built in validation. */
  validate?: (value: Array<string>) => string | undefined;
  /** Disables built in validation. */
  noValidate?: boolean;
}

export interface StyledHelpTextProps {
  size?: CheckboxSize;
}

export interface StyledCheckboxGroupProps extends MarginProps {
  hasError?: boolean;
}

export interface CheckboxGroupInnerWrapperProps {
  horizontal?: boolean;
}
