import { prefab } from "@diez/engine";

interface MediaQueryData {
  minWidth: number;
}

class MediaQuery extends prefab<MediaQueryData>() {
  defaults = {
    minWidth: 0,
  };

  static minWidth(w: number): MediaQuery {
    return new MediaQuery({ minWidth: w });
  }
}

export { MediaQuery };
