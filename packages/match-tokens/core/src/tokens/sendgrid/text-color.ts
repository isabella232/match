import { Colors } from "../../types";
import { color } from "../core/color";
import { textColor as coreTextColor } from "../core/text-color";

export const textColor: Colors = {
  ...coreTextColor,
  primary: color.gray100,
  secondary: color.gray90,
  tertiary: color.gray70,
};
