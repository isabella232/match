import * as React from "react";
import * as PropTypes from "prop-types";
import { CodeVariant } from "./types";
import type { CodeProps } from "./types";
import { StyledCode } from "./styles";

const Code: React.FC<CodeProps> = (props) => <StyledCode {...props} />;

Code.displayName = "Code";

Code.propTypes = {
  variant: PropTypes.oneOf(Object.values(CodeVariant)),
};

Code.defaultProps = {
  variant: CodeVariant.DARK,
};

export { Code, CodeVariant };
export type { CodeProps };
