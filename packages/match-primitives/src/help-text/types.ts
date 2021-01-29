import { HelpTextVariant } from "./constants";

export interface HelpTextProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: HelpTextVariant;
}
