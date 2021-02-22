import { LabelSize } from "./constants";

export interface LabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode;
  disabled: boolean;
  required: boolean;
  size?: LabelSize;
  legend?: boolean;
}

export interface StyledLabelProps extends LabelProps {
  labelSize?: LabelSize;
}
