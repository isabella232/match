import * as PropTypes from "prop-types";
import { responsiveProp } from "./responsive-validator";

/* eslint-disable @typescript-eslint/no-explicit-any */
export const tokenProp = (options: string[]): PropTypes.Requireable<any> => {
  return responsiveProp(PropTypes.oneOf(options));
};
/* eslint-enable @typescript-eslint/no-explicit-any */
