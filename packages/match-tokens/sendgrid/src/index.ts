// Must import prefabs because typescript bug!? 🤷‍♀️
// https://github.com/microsoft/TypeScript/issues/36675
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as _prefabs from "@diez/prefabs";
import {
  Breakpoints,
  Swatches,
  FontSizes,
  FontWeights,
} from "@twilio-labs/match-tokens-core";
import { fontFamily } from "./font-family";

export const sendGridDesignTokens = {
  breakpoint: new Breakpoints(),
  swatch: new Swatches(),
  fontFamily,
  fontSize: new FontSizes(),
  fontWeight: new FontWeights(),
};
