import * as React from "react";
import * as PropTypes from "prop-types";
import { styled } from "@twilio-labs/match-styling-library";

const StyledSmallParagraph = styled.p`
  font-size: 14px;
`;

const SmallParagraph: React.FC = ({ children }) => (
  <StyledSmallParagraph>{children}</StyledSmallParagraph>
);

SmallParagraph.propTypes = {
  children: PropTypes.node.isRequired,
};

export { SmallParagraph };
