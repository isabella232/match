import { Unit } from "../prefabs/unit";

export const unitToPx = (unit: Unit): string => `${unit.pixels}px`;
export const unitToRem = (unit: Unit): string =>
  `${Math.round((unit.pixels / 16) * 1000) / 1000}rem`;
