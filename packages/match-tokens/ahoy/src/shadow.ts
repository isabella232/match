import { DropShadows } from "@twilio-labs/match-tokens-core";
import { DropShadow } from "@diez/prefabs";
import { Point2D } from "@diez/prefabs";
import { Swatch } from "@twilio-labs/match-tokens-core";
const swatch = new Swatch();

export class Shadow {
  card = new DropShadows({
    shadows: [
      new DropShadow({
        offset: Point2D.make(0, 8),
        radius: 24,
        color: swatch.gray100.fade(0.9),
      }),
    ],
  });
  navigation = new DropShadows({
    shadows: [
      new DropShadow({
        offset: Point2D.make(0, 8),
        radius: 32,
        color: swatch.gray100.fade(0.88),
      }),
    ],
  });
  image = new DropShadows({
    shadows: [
      new DropShadow({
        offset: Point2D.make(0, 4),
        radius: 16,
        color: swatch.gray100.fade(0.85),
      }),
    ],
  });
  large = new DropShadows({
    shadows: [
      new DropShadow({
        offset: Point2D.make(0, 16),
        radius: 60,
        color: swatch.gray100.fade(0.85),
      }),
    ],
  });
}
