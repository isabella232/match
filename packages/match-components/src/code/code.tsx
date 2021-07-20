import * as PropTypes from "prop-types";
import * as React from "react";

import { marginPropTypes } from "@twilio-labs/match-props";

import { CodeVariant } from "./constants";
import { StyledCode } from "./styles";
import type { CodeProps } from "./types";

export const Code: React.FC<CodeProps> = (props) => <StyledCode {...props} />;

Code.displayName = "Code";

Code.propTypes = {
  ...marginPropTypes,
  variant: PropTypes.oneOf(Object.values(CodeVariant)),
};

Code.defaultProps = {
  variant: CodeVariant.DARK,
};
