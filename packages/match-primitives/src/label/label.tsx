import * as PropTypes from "prop-types";
import * as React from "react";

import { LabelSize, LabelAlignment } from "./constants";
import { StyledLabel, StyledRequired } from "./styles";
import type { LabelProps, asTags } from "./types";

export const Label: React.FC<LabelProps> = ({
  children,
  required,
  size,
  ...props
}) => {
  return (
    <StyledLabel required={required} labelSize={size} {...props}>
      {required && <StyledRequired data-testid="required-indicator" />}
      <span>{children}</span>
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
  alignment: PropTypes.oneOf(Object.values(LabelAlignment)),
};

Label.defaultProps = {
  size: LabelSize.NORMAL,
  as: "label",
  alignment: LabelAlignment.LEFT,
};
