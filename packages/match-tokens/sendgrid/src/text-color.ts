import * as _prefabs from "@diez/prefabs";
import { Swatches } from "@twilio-labs/match-tokens-core";
const swatch = new Swatches();

export class TextColors {
  primary = swatch.gray100;
  secondary = swatch.gray90;
  tertiary = swatch.gray70;
  inversePrimary = swatch.white;
}
