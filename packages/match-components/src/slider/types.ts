import { MarginProps } from "@twilio-labs/match-props";
import { LabelAlignment } from "@twilio-labs/match-primitives";

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
  alignment?: `${LabelAlignment}`;
}

export interface StyledSliderProps {
  progress: number;
}
