import * as _prefabs from "@diez/prefabs";
import { Swatch } from "@twilio-labs/match-tokens-core";

const swatch = new Swatch();

export class Button {
  inverseText = swatch.blue70;
  inverseHoverBg = swatch.blue70;
  inverseFocusBg = swatch.blue80;
}
