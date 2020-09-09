import * as _prefabs from "@diez/prefabs";
import { Swatch } from "@twilio-labs/match-tokens-core";
const swatch = new Swatch();

export class Text {
  primary = swatch.gray100;
  secondary = swatch.gray90;
  tertiary = swatch.gray70;
  inversePrimary = swatch.white;
}
