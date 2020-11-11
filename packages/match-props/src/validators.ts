import * as PropTypes from "prop-types";

/* eslint-disable @typescript-eslint/no-explicit-any */
export const responsiveProp = (
  type: PropTypes.Validator<any>
): PropTypes.Requireable<any> => {
  return PropTypes.oneOfType([type, PropTypes.arrayOf(type)]);
};

export const tokenProp = (options: string[]): PropTypes.Requireable<any> => {
  return responsiveProp(PropTypes.oneOf(options));
};
/* eslint-enable @typescript-eslint/no-explicit-any */
