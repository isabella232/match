import { Unit } from "../prefabs/unit";

export const unitToPx = (unit: Unit): string => `${unit.pixels}px`;
export const unitToRem = (unit: Unit): string => `${unit.pixels / 16}rem`;
