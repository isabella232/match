import * as React from "react";
import * as PropTypes from "prop-types";
import type { VisuallyHiddenProps, asTags } from "./types";
import { StyledVisuallyHidden } from "./styles";

const VisuallyHidden: React.FC<VisuallyHiddenProps> = (props) => (
  <StyledVisuallyHidden {...props} />
);

VisuallyHidden.propTypes = {
  as: PropTypes.oneOf([
    "span",
    "div",
    "p",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "thead",
    "tr",
    "th",
  ] as asTags[]).isRequired,
};

VisuallyHidden.defaultProps = {
  as: "span",
};

VisuallyHidden.displayName = "VisuallyHidden";

export { VisuallyHidden };
export type { VisuallyHiddenProps };
