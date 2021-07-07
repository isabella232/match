import * as React from "react";
import { ResponsiveValue } from "styled-system";

type CSSUnit = ResponsiveValue<`${number}${"px" | "rem" | "em"}`>;

export interface LogoProps extends React.HTMLAttributes<HTMLSpanElement> {
  color?: "gray90" | "gray70" | "white";
  maxHeight?: CSSUnit;
  margin?: CSSUnit;
  marginTop?: CSSUnit;
  marginRight?: CSSUnit;
  marginBottom?: CSSUnit;
  marginLeft?: CSSUnit;
}

export type ColorLogoProps = Omit<LogoProps, "color">;

export type LogoType = React.FC<LogoProps>;

export type ColorLogoType = React.FC<ColorLogoProps>;
