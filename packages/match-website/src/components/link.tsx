import * as React from "react";
import * as PropTypes from "prop-types";
import styled from "styled-components";
import { TwilioDesignTokens } from "@twilio-labs/match-tokens";

const ds = new TwilioDesignTokens();

const StyledLink = styled.a`
  color: ${ds.swatch.blue60.color};
  font-size: inherit;
`;

const Link: React.FC = ({ children, href }) =>
  href.startsWith("http://") || href.startsWith("https://") ? (
    <StyledLink href={href} target="_blank" rel="noreferrer nofollow">
      {children}
    </StyledLink>
  ) : (
    <StyledLink href={href}>{children}</StyledLink>
  );

Link.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
};

export { Link };
