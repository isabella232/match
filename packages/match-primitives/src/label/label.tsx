import * as PropTypes from "prop-types";
import * as React from "react";
import { LabelSize } from "./constants";
import { StyledLabel, StyledRequired } from "./styles";
import type { LabelProps, asTags } from "./types";

export const Label: React.FC<LabelProps> = ({
  children,
  required,
  requiredStyleAtEnd,
  size,
  ...props
}) => {
  return (
    <StyledLabel required={required} labelSize={size} {...props}>
      {required && !requiredStyleAtEnd && <StyledRequired />}
      {children}
      {required && requiredStyleAtEnd && <StyledRequired />}
    </StyledLabel>
  );
};

Label.displayName = "Label";

Label.propTypes = {
  children: PropTypes.node.isRequired,
  required: PropTypes.bool.isRequired,
  requiredStyleAtEnd: PropTypes.bool,
  disabled: PropTypes.bool.isRequired,
  size: PropTypes.oneOf(Object.values(LabelSize)),
  as: PropTypes.oneOf(["label", "legend"] as asTags[]),
};

Label.defaultProps = {
  size: LabelSize.NORMAL,
  as: "label",
};
