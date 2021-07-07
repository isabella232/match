import { ResponsiveValue } from "styled-system";

export interface IconProps extends React.HTMLAttributes<HTMLSpanElement> {
  color?:
    | "white"
    | "baseRed"
    | "blue50"
    | "blue60"
    | "blue80"
    | "baseGreen"
    | "baseOrange"
    | "basePurple"
    | "gray80"
    | "gray90"
    | "gray100"
    | "currentColor"
    | "inherit";
  size?: ResponsiveValue<
    | "small"
    | "medium"
    | "base"
    | "large"
    | "xLarge"
    | `${string}em`
    | `${string}px`
    | `${string}rem`
  >;
  title?: string;
  decorative?: boolean;
  margin?: ResponsiveValue<string>;
  marginTop?: ResponsiveValue<string>;
  marginRight?: ResponsiveValue<string>;
  marginBottom?: ResponsiveValue<string>;
  marginLeft?: ResponsiveValue<string>;
}

export type IconType = React.FC<IconProps>;
