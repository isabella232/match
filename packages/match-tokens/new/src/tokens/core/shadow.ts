import { ColorTranslator } from "colortranslator";
import { Shadows } from "../../types";
import { makeBoxShadow } from "../../utils";
import { color } from "./color";

const gray100 = new ColorTranslator(color.gray100.value);

export const shadow: Shadows = {
  card: { value: makeBoxShadow(0, 8, 24, gray100.setA(0.9).RGBA) },
  navigation: { value: makeBoxShadow(0, 14, 25, gray100.setA(0.88).RGBA) },
  image: { value: makeBoxShadow(0, 4, 16, gray100.setA(0.85).RGBA) },
  large: { value: makeBoxShadow(0, 16, 60, gray100.setA(0.85).RGBA) },
  inverse: { value: makeBoxShadow(0, 8, 24, gray100.setA(0.9).RGBA) },
};
