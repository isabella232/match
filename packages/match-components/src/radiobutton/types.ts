import { MarginProps } from "@twilio-labs/match-props";
import { RadioSize } from "./constants";

export interface RadioProps
  extends MarginProps,
    Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  name: string;
  label: string;
  value: string;
  size?: RadioSize;
  /** Sets the input as required. */
  required?: boolean;
  /** Disables the input. */
  disabled?: boolean;
  /** Sets the input as readonly. */
  readOnly?: boolean;
  /** Supporting validation instructions.  */
  helper?: string;
  /** Error message to display when invalid. */
  error?: string;
}
