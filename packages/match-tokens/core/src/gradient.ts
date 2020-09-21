import { coreThemeTokens } from "./designs/CoreTheme.sketch";
const { colors: C } = coreThemeTokens;
import { LinearGradient } from "@diez/prefabs";

export class Gradient {
  redHero = LinearGradient.make(
    180,
    C.brandHighlight,
    C.brandHighlight.fade(0.25)
  );
  blueHero = LinearGradient.make(180, C.baseBlue, C.baseBlue.fade(0.25));
  red180 = LinearGradient.make(
    180,
    C.brandHighlight.fade(0.25),
    C.brandHighlight.fade(1)
  );
  orange180 = LinearGradient.make(
    180,
    C.baseOrange.fade(0.25),
    C.baseOrange.fade(1)
  );
  green180 = LinearGradient.make(
    180,
    C.baseGreen.fade(0.25),
    C.baseGreen.fade(1)
  );
  blue180 = LinearGradient.make(180, C.blue60.fade(0.25), C.blue60.fade(1));
  purple180 = LinearGradient.make(
    180,
    C.basePurple.fade(0.25),
    C.basePurple.fade(1)
  );
  darkGray = LinearGradient.make(135, C.gray90.fade(0.8), C.gray90.fade(0.2));
  lightRedBlue = LinearGradient.make(
    135,
    C.red60.fade(0.5),
    C.blue60.fade(0.5)
  );
  redBlue = LinearGradient.make(0, C.red60.fade(0.2), C.blue60.fade(0.3));
}
