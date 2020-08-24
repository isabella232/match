import { prefab } from "@diez/engine";

/**
 * Single measurement unit.
 */
export interface UnitData {
  pixels: number;
}

/**
 * Representation of a single measurement unit.
 * @noinheritdoc
 */
export class Unit extends prefab<UnitData>() {
  defaults = {
    pixels: 0,
  };

  static px(pixels: number): Unit {
    return new Unit({ pixels });
  }

  static rem(rem: number): Unit {
    return new Unit({ pixels: rem * 16 });
  }
}
