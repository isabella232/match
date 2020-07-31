import { MediaQuery } from "./components/media-query";

const Breakpoint = {
  small: new MediaQuery({ minWidth: 360 }),
  medium: new MediaQuery({ minWidth: 768 }),
  large: new MediaQuery({ minWidth: 1024 }),
  xLarge: new MediaQuery({ minWidth: 1200 }),
};

export const defaultDesignTokens = {
  Breakpoint,
};
