// Must import prefabs because typescript bug!? 🤷‍♀️
// https://github.com/microsoft/TypeScript/issues/36675
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as _prefabs from "@diez/prefabs";
import {
  Breakpoint,
  Swatch,
  FontSize,
  FontWeight,
  Border,
  BorderWidth,
  Space,
  IconSize,
} from "@twilio-labs/match-tokens-core";
import { fontFamily } from "./font-family";
import { Background } from "./background";
import { Text } from "./text";
import { Shadow } from "./shadow";
import { Gradient } from "./gradient";
import { Button } from "./button";

export const sendGridDesignTokens = {
  breakpoint: new Breakpoint(),
  swatch: new Swatch(),
  fontFamily,
  fontSize: new FontSize(),
  fontWeight: new FontWeight(),
  text: new Text(),
  background: new Background(),
  shadow: new Shadow(),
  gradient: new Gradient(),
  button: new Button(),
  border: new Border(),
  borderWidth: new BorderWidth(),
  space: new Space(),
  iconSize: new IconSize(),
};
