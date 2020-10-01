import { DropShadows } from "@twilio-labs/match-tokens-core";
import { DropShadow } from "@diez/prefabs";
import { Point2D } from "@diez/prefabs";
import { Swatch } from "@twilio-labs/match-tokens-core";
const swatch = new Swatch();

export class Shadow {
  card = new DropShadows({
    shadows: [
      new DropShadow({
        offset: Point2D.make(0, 10),
        radius: 18,
        color: swatch.gray20.fade(0.5),
      }),
      new DropShadow({
        offset: Point2D.make(0, 0),
        radius: 1,
        color: swatch.gray50,
      }),
    ],
  });
  navigation = new DropShadows({
    shadows: [
      new DropShadow({
        offset: Point2D.make(0, 7),
        radius: 11,
        color: swatch.gray100.fade(0.8),
      }),
      new DropShadow({
        offset: Point2D.make(0, 0),
        radius: 1,
        color: swatch.gray50,
      }),
    ],
  });
  image = new DropShadows({
    shadows: [
      new DropShadow({
        offset: Point2D.make(0, 2),
        radius: 8,
        color: swatch.blue10,
      }),
      new DropShadow({
        offset: Point2D.make(0, 0),
        radius: 1,
        color: swatch.gray50,
      }),
    ],
  });
  large = new DropShadows({
    shadows: [
      new DropShadow({
        offset: Point2D.make(0, 10),
        radius: 29,
        color: swatch.gray80.fade(0.66),
      }),
      new DropShadow({
        offset: Point2D.make(0, 0),
        radius: 1,
        color: swatch.gray50.fade(0.3),
      }),
    ],
  });
  inverse = new DropShadows({
    shadows: [
      new DropShadow({
        offset: Point2D.make(0, 6),
        radius: 8,
        color: swatch.gray100.fade(0.88),
      }),
    ],
  });
}
