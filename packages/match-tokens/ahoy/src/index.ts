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
  Gradient,
  Button,
  Border,
  BorderWidth,
  Space,
  IconSize,
  Card,
} from "@twilio-labs/match-tokens-core";
import { Shadow } from "./shadow";
export const ahoyDesignTokens = {
  breakpoint: new Breakpoint(),
  swatch: new Swatch(),
  fontFamily: new FontFamily(),
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
  iconSize: new IconSize(),
  card: new Card(),
};
