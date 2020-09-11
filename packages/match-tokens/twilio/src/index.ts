// Must import prefabs because typescript bug!? 🤷‍♀️
// https://github.com/microsoft/TypeScript/issues/36675
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as _prefabs from "@diez/prefabs";
import {
  Breakpoint,
  Swatch,
  FontFamily,
  FontSize,
  FontWeight,
  Background,
  Text,
} from "@twilio-labs/match-tokens-core";

export const twilioDesignTokens = {
  breakpoint: new Breakpoint(),
  swatch: new Swatch(),
  fontFamily: new FontFamily(),
  fontSize: new FontSize(),
  fontWeight: new FontWeight(),
  background: new Background(),
  text: new Text(),
};
