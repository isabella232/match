import { ResponsiveValue } from "styled-system";
import { iconSizes } from "@twilio-labs/match-tokens";

export type IconSizeOptions =
  | keyof typeof iconSizes
  | `${string}em`
  | `${string}px`
  | `${string}rem`;

export type IconSizeProp = ResponsiveValue<IconSizeOptions>;

// This should always match IconProps from @twilio-labs/match-icons-core/src/index.d.ts
export type IconComponentProp = React.FC<{
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
}>;
