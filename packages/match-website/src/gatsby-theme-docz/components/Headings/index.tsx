import * as React from "react";
import styled from "styled-components";
import * as PropTypes from "prop-types";

const StyledHeadingLink = styled.a`
  color: inherit;
  text-decoration: none;
`;

const StyledH2 = styled.h2`
  font-size: 24px;
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

const StyledH3 = styled.h3`
  font-size: 20px;
`;

const h3: React.FC = ({ children, id }) => (
  <StyledH3 id={id}>
    <StyledHeadingLink href={`#${id}`}>{children}</StyledHeadingLink>
  </StyledH3>
);

h3.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired,
};

const StyledH4 = styled.h4`
  font-size: 16px;
`;

const h4: React.FC = ({ children, id }) => (
  <StyledH4 id={id}>
    <StyledHeadingLink href={`#${id}`}>{children}</StyledHeadingLink>
  </StyledH4>
);

h4.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired,
};

export { h2 };
export { h3 };
export { h4 };
