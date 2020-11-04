import { ColorTranslator } from "colortranslator";
import { Shadows } from "../../types";
import { makeBoxShadow } from "../../utils";
import { color } from "../core/color";

const gray20 = new ColorTranslator(color.gray20.value);
const gray80 = new ColorTranslator(color.gray80.value);
const gray100 = new ColorTranslator(color.gray100.value);

export const shadow: Shadows = {
  card: { value: makeBoxShadow(0, 10, 18, gray20.setA(0.5).RGBA) },
  navigation: { value: makeBoxShadow(0, 7, 11, gray100.setA(0.2).RGBA) },
  image: { value: makeBoxShadow(0, 2, 8, gray20.setA(0.5).RGBA) },
  large: { value: makeBoxShadow(0, 10, 29, gray80.setA(0.34).RGBA) },
  inverse: { value: makeBoxShadow(0, 6, 8, gray100.setA(0.12).RGBA) },
};
