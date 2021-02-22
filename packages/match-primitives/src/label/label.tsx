import * as React from "react";
import * as PropTypes from "prop-types";
import type { LabelProps } from "./types";
import { StyledLabel, StyledRequired } from "./styles";
import { LabelSize } from "./constants";

export const Label: React.FC<LabelProps> = ({
  children,
  required,
  legend,
  size,
  ...props
}) => {
  return (
    <StyledLabel
      required={required}
      as={Boolean(legend) ? "legend" : "label"}
      labelSize={size}
      {...props}
    >
      {required && <StyledRequired />}
      {children}
    </StyledLabel>
  );
};

Label.displayName = "Label";

Label.propTypes = {
  children: PropTypes.node.isRequired,
  required: PropTypes.bool.isRequired,
  disabled: PropTypes.bool.isRequired,
  size: PropTypes.oneOf(Object.values(LabelSize)),
  legend: PropTypes.bool,
};

Label.defaultProps = {
  size: LabelSize.SMALL,
};
