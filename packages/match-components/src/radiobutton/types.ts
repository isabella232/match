import { MarginProps } from "@twilio-labs/match-props";
import { RadioSize } from "./constants";

export interface RadioProps
  extends MarginProps,
    Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  name: string;
  label: string;
  value: string;
  size?: RadioSize;
  /** Disables the radio button. */
  disabled?: boolean;
  /** Sets the radio button as readonly. */
  readOnly?: boolean;
  /** Supporting information  */
  additional?: string;
  /** Marks that the radio button has an error*/
  error?: boolean;
}

export interface HiddenRadioProps extends RadioProps {
  radioSize?: RadioSize;
}

export interface StyledRadioProps {
  hasError: boolean;
  radioSize?: RadioSize;
}
