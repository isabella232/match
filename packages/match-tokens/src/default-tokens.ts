import { MediaQuery } from "./components/media-query";

const Breakpoints = {
  small: new MediaQuery({ minWidth: 360 }),
};

export const defaultDesignTokens = {
  Breakpoints,
};
