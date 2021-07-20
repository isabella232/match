import { ColorTranslator } from "colortranslator";

import { Backgrounds } from "../../types";
import { makeGradient } from "../../utils";
import { color } from "../core/color";

const blue10 = new ColorTranslator(color.blue10.value);

export const gradient: Backgrounds = {
  blue180: {
    value: makeGradient("180deg", blue10.setA(0.1).RGBA, blue10.setA(0.6).RGBA),
  },
  lightBlue180: {
    value: makeGradient("180deg", blue10.setA(0.1).RGBA, blue10.setA(0.3).RGBA),
  },
  blue0: {
    value: makeGradient("0deg", blue10.setA(0.1).RGBA, blue10.setA(0.8).RGBA),
  },
};
