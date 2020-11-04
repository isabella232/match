export const remToPx = (rem: string): string =>
  Math.round(Number.parseFloat(rem) * 16) + "px";
