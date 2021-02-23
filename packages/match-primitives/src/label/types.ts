import { LabelSize } from "./constants";

export type asTags = "label" | "legend";

export interface LabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode;
  disabled: boolean;
  required: boolean;
  size?: LabelSize;
  as?: asTags;
}

export interface StyledLabelProps extends LabelProps {
  labelSize?: LabelSize;
}
