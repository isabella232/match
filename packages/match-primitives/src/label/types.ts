import { LabelSize, LabelAlignment } from "./constants";

export type asTags = "label" | "legend";

export interface LabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode;
  disabled: boolean;
  required: boolean;
  fieldValue?: string;
  size?: LabelSize;
  as?: asTags;
  alignment?: `${LabelAlignment}`;
}

export interface StyledLabelProps extends LabelProps {
  labelSize?: LabelSize;
}
