import { MediaQuery } from "./framework/prefabs/media-query";

export class Breakpoint {
  small = new MediaQuery({ minWidth: 360 });
  medium = new MediaQuery({ minWidth: 768 });
  large = new MediaQuery({ minWidth: 1024 });
  xLarge = new MediaQuery({ minWidth: 1200 });
}
