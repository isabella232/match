import { DropShadow } from "@diez/prefabs";
import { Point2D } from "@diez/prefabs";
import { Swatch } from "@twilio-labs/match-tokens-core";
const swatch = new Swatch();

export class Shadow {
  card = new DropShadow({
    offset: Point2D.make(0, 10),
    radius: 18,
    color: swatch.gray20.fade(0.5),
  });
  navigation = new DropShadow({
    offset: Point2D.make(0, 7),
    radius: 11,
    color: swatch.gray100.fade(0.8),
  });
  image = new DropShadow({
    offset: Point2D.make(0, 2),
    radius: 8,
    color: swatch.gray20.fade(0.5),
  });
  large = new DropShadow({
    offset: Point2D.make(0, 10),
    radius: 29,
    color: swatch.gray80.fade(0.66),
  });
  inverse = new DropShadow({
    offset: Point2D.make(0, 6),
    radius: 8,
    color: swatch.gray100.fade(0.88),
  });
}
