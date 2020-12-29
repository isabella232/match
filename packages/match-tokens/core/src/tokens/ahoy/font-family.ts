import { FontFamilies } from "../../types";
import { fontFamily as coreFontFamily } from "../core/font-family";

delete coreFontFamily.hero;

export const fontFamily: FontFamilies = {
  ...coreFontFamily,
};
