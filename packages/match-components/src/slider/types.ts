import { MarginProps } from "@twilio-labs/match-props";

export interface SliderProps
  extends MarginProps,
    React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  maxPlus?: boolean;
  /** Sets the input as required. */
  required?: boolean;
  /** Disables the input. */
  disabled?: boolean;
  /** Overrides built in validation. */
  validate?: (value: string) => string | undefined;
  /** Disables built in validation. */
  noValidate?: boolean;
  min: number;
  max: number;
  step?: number;
}

export interface StyledSliderProps {
  progress: number;
}
