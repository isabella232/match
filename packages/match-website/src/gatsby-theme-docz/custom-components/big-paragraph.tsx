import * as React from "react";
import * as PropTypes from "prop-types";
import { styled } from "@twilio-labs/match-styling-library";

const StyledBigParagraph = styled.p`
  font-size: 16px;
`;

const BigParagraph: React.FC = ({ children }) => (
  <StyledBigParagraph>{children}</StyledBigParagraph>
);

BigParagraph.propTypes = {
  children: PropTypes.node.isRequired,
};

export { BigParagraph };
