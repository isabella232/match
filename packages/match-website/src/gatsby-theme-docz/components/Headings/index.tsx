import * as React from "react";
import { styled } from "@twilio-labs/match-styling-library";
import * as PropTypes from "prop-types";

const StyledH2 = styled.h2`
  font-size: 24px;
`;

const StyledH3 = styled.h3`
  font-size: 16px;
`;

const StyledHeadingLink = styled.a`
  color: inherit;
  text-decoration: none;
`;
const h2: React.FC = ({ children, id }) => (
  <StyledH2 id={id}>
    <StyledHeadingLink href={`#${id}`}>{children}</StyledHeadingLink>
  </StyledH2>
);

h2.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired,
};

const h3: React.FC = ({ children, id }) => (
  <StyledH3 id={id}>
    <StyledHeadingLink href={`#${id}`}>{children}</StyledHeadingLink>
  </StyledH3>
);

h3.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired,
};

export { h2 };
export { h3 };
