// Must import prefabs because typescript bug!? 🤷‍♀️
// https://github.com/microsoft/TypeScript/issues/36675
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as _prefabs from "@diez/prefabs";
import { breakpoint } from "./breakpoint";
import { swatch } from "./swatch";

export const sendGridDesignTokens = {
  breakpoint,
  swatch,
};
