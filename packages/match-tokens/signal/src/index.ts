// Must import prefabs because typescript bug!? 🤷‍♀️
// https://github.com/microsoft/TypeScript/issues/36675
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as _prefabs from "@diez/prefabs";
import {
  Breakpoint,
  Swatch,
  FontSize,
  FontWeight,
  Background,
  Text,
  Shadow,
  Gradient,
  Button,
  Border,
  BorderWidth,
  Space,
} from "@twilio-labs/match-tokens-core";
import { fontFamily } from "./font-family";

export const signalDesignTokens = {
  breakpoint: new Breakpoint(),
  swatch: new Swatch(),
  fontFamily,
  fontSize: new FontSize(),
  fontWeight: new FontWeight(),
  background: new Background(),
  text: new Text(),
  shadow: new Shadow(),
  gradient: new Gradient(),
  button: new Button(),
  border: new Border(),
  borderWidth: new BorderWidth(),
  space: new Space(),
};
