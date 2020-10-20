import * as React from "react";
import * as PropTypes from "prop-types";
import { StyledAnchor } from "./styles";
import { AnchorVariant, AnchorTarget, AnchorProps } from "./types";

export interface ExternalProps {
  rel: string;
  target: AnchorTarget;
}

const EXTERNAL_URL_REGEX = /^(https?:)\S*$/;

const secureExternalLink = (
  href: string
): Record<string, unknown> | undefined => {
  if (EXTERNAL_URL_REGEX.test(href)) {
    return { rel: "noreferrer noopener", target: AnchorTarget.BLANK };
  }
};

const Anchor = React.forwardRef<HTMLAnchorElement, AnchorProps>(
  ({ ...props }, ref) => {
    return (
      <StyledAnchor {...secureExternalLink(props.href)} {...props} ref={ref} />
    );
  }
);
Anchor.displayName = "anchor";

Anchor.propTypes = {
  variant: PropTypes.oneOf(Object.values(AnchorVariant)),
  href: PropTypes.string.isRequired,
  target: PropTypes.oneOf(Object.values(AnchorTarget)),
  rel: PropTypes.string,
  noUnderline: PropTypes.bool,
};

Anchor.defaultProps = {
  variant: AnchorVariant.TEXT,
  noUnderline: false,
};

export { Anchor, AnchorVariant, AnchorProps, AnchorTarget };
