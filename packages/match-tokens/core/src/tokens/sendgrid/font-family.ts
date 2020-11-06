import { FontFamilies } from "../../types";
import { fontFamily as coreFontFamily } from "../core/font-family";

export const fontFamily: FontFamilies = {
  ...coreFontFamily,
  text: { value: "Colfax, Helvetica, Arial, sans-serif" },
  heading: { value: "{fontFamily.text.value}" },
  quote: {
    value: "Bookmania-Regular, Georgia,Cambria, Times New Roman, Times, serif",
  },
};
