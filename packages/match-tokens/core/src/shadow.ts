import { DropShadow } from "@diez/prefabs";
import { Point2D } from "@diez/prefabs";
import { Swatch } from "./swatch";

const C = new Swatch();

export class Shadow {
  card = new DropShadow({
    offset: Point2D.make(0, 8),
    radius: 24,
    color: C.gray100.fade(0.9),
  });
  navigation = new DropShadow({
    offset: Point2D.make(0, 14),
    radius: 25,
    color: C.gray100.fade(0.88),
  });
  image = new DropShadow({
    offset: Point2D.make(0, 4),
    radius: 16,
    color: C.gray100.fade(0.85),
  });
  large = new DropShadow({
    offset: Point2D.make(0, 16),
    radius: 60,
    color: C.gray100.fade(0.85),
  });
  inverse = new DropShadow({
    offset: Point2D.make(0, 8),
    radius: 24,
    color: C.gray100.fade(0.9),
  });
}
