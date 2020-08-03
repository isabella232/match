// Must import prefabs because typescript bug!? 🤷‍♀️
// https://github.com/microsoft/TypeScript/issues/36675
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as _prefabs from "@diez/prefabs";
import { wombat } from "./tokens/wombat";
import { twilio } from "./tokens/twilio";

export const designTokens = {
  twilio,
  wombat,
};
