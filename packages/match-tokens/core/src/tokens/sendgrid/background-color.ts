import { Colors } from "../../types";
import { backgroundColor as coreBackgroundColor } from "../core/background-color";
import { color } from "../core/color";

export const backgroundColor: Colors = {
  ...coreBackgroundColor,
  blue: color.blue60,
};
