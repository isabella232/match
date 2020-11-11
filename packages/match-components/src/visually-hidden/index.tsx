import * as PropTypes from "prop-types";
import styled from "styled-components";
import type { VisuallyHiddenProps, asTags } from "./types";

const VisuallyHidden = styled.span<VisuallyHiddenProps>`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  white-space: nowrap;
  text-transform: none;
  border: 0;
  clip: rect(0 0 0 0);
`;

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

export { VisuallyHidden };
export type { VisuallyHiddenProps };
