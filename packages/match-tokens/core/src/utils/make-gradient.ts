export const makeGradient = (angle: string, ...colors: string[]): string => {
  const lastIndex = colors.length - 1;
  return `linear-gradient(${angle}, ${colors
    .map((color, i) => `${color} ${Math.round((i / lastIndex) * 100)}%`)
    .join(", ")})`;
};
