import * as React from "react";
import * as PropTypes from "prop-types";
import styled from "styled-components";

type asTags =
  | "span"
  | "div"
  | "p"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "thead"
  | "tr"
  | "th";

export interface VisuallyHiddenProps {
  as: asTags;
}

const StyledVisuallyHidden = styled.span`
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

export { VisuallyHidden };
