import { ColorTranslator } from "colortranslator";
import { Shadows } from "../../types";
import { makeBoxShadow } from "../../utils";
import { shadow as coreShadow } from "../core/shadow";
import { color } from "../core/color";

const gray100 = new ColorTranslator(color.gray100.value);

export const shadow: Shadows = {
  ...coreShadow,
  navigation: { value: makeBoxShadow(0, 8, 32, gray100.setA(0.12).RGBA) },
};
