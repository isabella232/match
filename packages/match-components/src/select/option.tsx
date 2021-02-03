import * as React from "react";
import * as PropTypes from "prop-types";
import { StyledOption } from "./styles";
import type { OptionProps } from "./types";

export const Option = React.forwardRef<HTMLLIElement, OptionProps>(
  (props, ref) => <StyledOption ref={ref} {...props} />
);

Option.displayName = "Option";

Option.propTypes = {
  value: PropTypes.string.isRequired,
  highlighted: PropTypes.bool,
  selected: PropTypes.bool,
};
