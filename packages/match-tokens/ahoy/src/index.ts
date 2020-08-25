// Must import prefabs because typescript bug!? 🤷‍♀️
// https://github.com/microsoft/TypeScript/issues/36675
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as _prefabs from "@diez/prefabs";
import {
  Breakpoints,
  Swatches,
  FontFamilies,
  FontSizes,
  FontWeights,
} from "@twilio-labs/match-tokens-core";

export const ahoyDesignTokens = {
  breakpoint: new Breakpoints(),
  swatch: new Swatches(),
  fontFamily: new FontFamilies(),
  fontSize: new FontSizes(),
  fontWeight: new FontWeights(),
};
