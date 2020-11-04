import { pxToRem } from "./px-to-rem";

export const makeBoxShadow = (
  offsetX: number,
  offsetY: number,
  blur: number,
  color: string
): string =>
  `${pxToRem(offsetX)}rem ${pxToRem(offsetY)}rem ${pxToRem(blur)}rem ${color}`;
