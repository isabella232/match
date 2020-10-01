import { DropShadows } from "./framework/prefabs/drop-shadows";
import { DropShadow } from "@diez/prefabs";
import { Point2D } from "@diez/prefabs";
import { coreThemeTokens } from "./designs/CoreTheme.sketch";
const { colors: C } = coreThemeTokens;

export class Shadow {
  card = new DropShadows({
    shadows: [
      new DropShadow({
        offset: Point2D.make(0, 8),
        radius: 24,
        color: C.gray100.fade(0.9),
      }),
    ],
  });
  navigation = new DropShadows({
    shadows: [
      new DropShadow({
        offset: Point2D.make(0, 14),
        radius: 25,
        color: C.gray100.fade(0.88),
      }),
    ],
  });
  image = new DropShadows({
    shadows: [
      new DropShadow({
        offset: Point2D.make(0, 4),
        radius: 16,
        color: C.gray100.fade(0.85),
      }),
    ],
  });
  large = new DropShadows({
    shadows: [
      new DropShadow({
        offset: Point2D.make(0, 16),
        radius: 60,
        color: C.gray100.fade(0.85),
      }),
    ],
  });
  inverse = new DropShadows({
    shadows: [
      new DropShadow({
        offset: Point2D.make(0, 8),
        radius: 24,
        color: C.gray100.fade(0.9),
      }),
    ],
  });
}
