import * as _prefabs from "@diez/prefabs";
import { Swatch } from "@twilio-labs/match-tokens-core";
import { LinearGradient } from "@diez/prefabs";
const swatch = new Swatch();

export class Gradient {
  blue180 = LinearGradient.make(
    180,
    swatch.blue10.fade(0.9),
    swatch.blue10.fade(0.4)
  );
  lightBlue180 = LinearGradient.make(
    180,
    swatch.blue10.fade(0.9),
    swatch.blue10.fade(0.7)
  );
  blue0 = LinearGradient.make(
    0,
    swatch.blue10.fade(0.9),
    swatch.blue10.fade(0.2)
  );
}
