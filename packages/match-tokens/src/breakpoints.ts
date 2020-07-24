import { prefab } from "@diez/engine";

interface BreakpointData {
  mediaQuery: string;
}

class Breakpoint extends prefab<BreakpointData>() {
  defaults = {
    mediaQuery: "min-width: 0px",
  };

  static minWidth(w: number): Breakpoint {
    return new Breakpoint({ mediaQuery: `min-width: ${w}px` });
  }
}

export { Breakpoint };
