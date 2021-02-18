import { MarginProps } from "@twilio-labs/match-props";
import { TextareaResizeOptions } from "./constants";

export interface TextareaProps
  extends MarginProps,
    React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  label: string;
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
  helper?: string;
  /** Minimum character count. */
  minLength?: number;
  /** Maximum character count. */
  maxLength?: number;
  /**
   * Default number of rows to display (3-10).
   * @type number
   */
  rows?: 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  resize?: TextareaResizeOptions;
  validate?: (value: string) => string | undefined;
  noValidate?: boolean;
}

export interface StyledTextareaContainerProps {
  hasError: boolean;
  disabled: boolean;
}

export interface StyledTextareaProps {
  rows: number;
  resize?: TextareaResizeOptions;
}
