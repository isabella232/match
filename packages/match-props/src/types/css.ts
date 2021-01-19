import { ResponsiveValue } from "styled-system";

export type CSSUnit = `${number}${"px" | "rem" | "em"}`;
export type CSSUnitProp = ResponsiveValue<CSSUnit>;
