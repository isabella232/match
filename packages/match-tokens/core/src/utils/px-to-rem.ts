export const pxToRem = (px: number): number =>
  Math.round((px / 16) * 1000) / 1000;
