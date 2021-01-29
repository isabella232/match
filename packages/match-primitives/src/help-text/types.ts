import { HelpTextVariant } from "./constants";

export interface HelpTextProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: HelpTextVariant;
}
