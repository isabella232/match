import * as React from "react";
import * as PropTypes from "prop-types";
import type { LabelProps } from "./types";
import { StyledLabel, StyledRequired } from "./styles";

export const Label: React.FC<LabelProps> = ({
  children,
  required,
  ...props
}) => {
  return (
    <StyledLabel required={required} {...props}>
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
};
