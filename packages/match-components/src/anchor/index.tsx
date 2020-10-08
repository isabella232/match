import * as React from "react";
import * as PropTypes from "prop-types";
import { StyledAnchor } from "./styles";
import { AnchorVariant, AnchorProps } from "./types";

const Anchor: React.FC<AnchorProps> = ({ ...props }) => {
  if (!props.href) console.warn("href must be provided for an anchor");

  return <StyledAnchor {...props} />;
};

Anchor.propTypes = {
  variant: PropTypes.oneOf(Object.values(AnchorVariant)),
  href: PropTypes.string,
  target: PropTypes.string,
  rel: PropTypes.string,
};

Anchor.defaultProps = {
  variant: AnchorVariant.TEXT,
};

export { Anchor, AnchorVariant, AnchorProps };
