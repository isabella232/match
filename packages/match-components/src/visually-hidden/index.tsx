import * as PropTypes from "prop-types";
import * as React from "react";
import { StyledVisuallyHidden } from "./styles";
import type { VisuallyHiddenProps, asTags } from "./types";

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
