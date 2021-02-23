import * as React from "react";
import * as PropTypes from "prop-types";
import type { LabelProps, asTags } from "./types";
import { StyledLabel, StyledRequired } from "./styles";
import { LabelSize } from "./constants";

export const Label: React.FC<LabelProps> = ({
  children,
  required,
  as,
  size,
  ...props
}) => {
  return (
    <StyledLabel required={required} as={as} labelSize={size} {...props}>
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
  as: PropTypes.oneOf(["label", "legend"] as asTags[]),
};

Label.defaultProps = {
  size: LabelSize.SMALL,
  as: "label",
};
