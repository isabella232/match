import { prefab } from "@diez/engine";

/**
 * Single font weight.
 */
export interface WeightData {
  weight: number;
}

/**
 * Representation of a single font weight.
 * @noinheritdoc
 */
export class Weight extends prefab<WeightData>() {
  defaults = {
    weight: 400,
  };

  static num(weight: number): Weight {
    return new Weight({ weight });
  }
}
