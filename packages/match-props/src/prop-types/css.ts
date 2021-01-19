import * as PropTypes from "prop-types";
import { CSSUnit } from "../types";
import { responsiveProp } from "../validators";

const cssUnitValidator: PropTypes.Validator<CSSUnit> = (
  props,
  propName,
  componentName,
  _location,
  propFullName
) => {
  if (!/^\d+(px|rem|em)?/.test(props[propName])) {
    return new Error(
      `[${componentName}]: Invalid unit supplied for ${propFullName}.`
    );
  }
  // eslint-disable-next-line unicorn/no-null
  return null;
};

export const cssUnitPropType = responsiveProp(cssUnitValidator);
