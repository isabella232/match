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
      brandHighlight.RGBA,
      brandHighlight.setA(0.93).RGBA
    ),
  },
  blueHero: {
    value: makeGradient("180deg", baseBlue.RGBA, baseBlue.setA(0.93).RGBA),
  },
  red180: {
    value: makeGradient(
      "180deg",
      brandHighlight.setA(0.93).RGBA,
      brandHighlight.setA(1).RGBA
    ),
  },
  orange180: {
    value: makeGradient(
      "180deg",
      baseOrange.setA(0.93).RGBA,
      baseOrange.setA(1).RGBA
    ),
  },
  green180: {
    value: makeGradient(
      "180deg",
      baseGreen.setA(0.93).RGBA,
      baseGreen.setA(1).RGBA
    ),
  },
  blue180: {
    value: makeGradient("180deg", blue60.setA(0.93).RGBA, blue60.setA(1).RGBA),
  },
  purple180: {
    value: makeGradient(
      "180deg",
      basePurple.setA(0.93).RGBA,
      basePurple.setA(1).RGBA
    ),
  },
  darkGray: {
    value: makeGradient(
      "to bottom right",
      gray90.setA(0.8).RGBA,
      gray90.setA(0.3).RGBA
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
      red60.setA(0.3).RGBA,
      blue60.setA(0.3).RGBA
    ),
  },
};
