import { prefab } from "@diez/engine";
import { DropShadow } from "@diez/prefabs";

/**
 * DropShadow data.
 */
export interface DropShadowsData {
  /**
   * An array of drop shadows
   */
  shadows: DropShadow[];
}

/**
 * Provides multiple drop shadows as a single token
 *
 * @noinheritdoc
 */
export class DropShadows extends prefab<DropShadowsData>() {
  defaults = {
    shadows: [new DropShadow()],
  };
}
