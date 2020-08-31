import * as React from "react";
import * as PropTypes from "prop-types";
import styled from "styled-components";

const asTags = [
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
] as const;

interface VisuallyHiddenProps {
  as: typeof asTags[number];
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
  as: PropTypes.oneOf(asTags).isRequired,
};

VisuallyHidden.defaultProps = {
  as: "span",
};

export { VisuallyHidden };
