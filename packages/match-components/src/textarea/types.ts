import { MarginProps } from "@twilio-labs/match-props";

export interface TextareaProps
  extends MarginProps,
    React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  label: string;
  value?: string;
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
  /** Error message to display when invalid. */
  error?: string;
  minLength?: number;
  maxLength?: number;
  rows?: number;
}

export interface StyledTextareaProps {
  rows: number;
}
