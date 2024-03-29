import { ColorTranslator } from "colortranslator";

import { Backgrounds } from "../../types";
import { makeGradient } from "../../utils";

import { color } from "./color";

const brandHighlight = new ColorTranslator(color.brandHighlight.value);
const baseBlue = new ColorTranslator(color.baseBlue.value);
const blue60 = new ColorTranslator(color.blue60.value);
const basePurple = new ColorTranslator(color.basePurple.value);
const baseOrange = new ColorTranslator(color.baseOrange.value);
const baseGreen = new ColorTranslator(color.baseGreen.value);
const gray90 = new ColorTranslator(color.gray90.value);
const red60 = new ColorTranslator(color.red60.value);

export const gradient: Backgrounds = {
  redHero: {
    value: makeGradient(
      "180deg",
      brandHighlight.setA(0).RGBA,
      brandHighlight.setA(0.07).RGBA
    ),
  },
  blueHero: {
    value: makeGradient(
      "180deg",
      baseBlue.setA(0).RGBA,
      baseBlue.setA(0.07).RGBA
    ),
  },
  red180: {
    value: makeGradient(
      "180deg",
      brandHighlight.setA(0.07).RGBA,
      brandHighlight.setA(0).RGBA
    ),
  },
  orange180: {
    value: makeGradient(
      "180deg",
      baseOrange.setA(0.07).RGBA,
      baseOrange.setA(0).RGBA
    ),
  },
  green180: {
    value: makeGradient(
      "180deg",
      baseGreen.setA(0.07).RGBA,
      baseGreen.setA(0).RGBA
    ),
  },
  blue180: {
    value: makeGradient("180deg", blue60.setA(0.07).RGBA, blue60.setA(0).RGBA),
  },
  purple180: {
    value: makeGradient(
      "180deg",
      basePurple.setA(0.07).RGBA,
      basePurple.setA(0).RGBA
    ),
  },
  darkGray: {
    value: makeGradient(
      "to bottom right",
      gray90.setA(0.2).RGBA,
      gray90.setA(0.7).RGBA
    ),
  },
  lightRedBlue: {
    value: makeGradient(
      "to bottom right",
      red60.setA(0.5).RGBA,
      blue60.setA(0.5).RGBA
    ),
  },
  redBlue: {
    value: makeGradient(
      "to bottom right",
      red60.setA(0.7).RGBA,
      blue60.setA(0.7).RGBA
    ),
  },
};
