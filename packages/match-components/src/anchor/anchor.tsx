import * as PropTypes from "prop-types";
import * as React from "react";

import { marginPropTypes } from "@twilio-labs/match-props";

import { AnchorVariant, AnchorTarget } from "./constants";
import { StyledAnchor } from "./styles";
import type { AnchorProps } from "./types";

const EXTERNAL_URL_REGEX = /^(https?:)\S*$/;

const secureExternalLink = (
  href?: string
): Record<string, unknown> | undefined => {
  if (!href) return {};
  if (EXTERNAL_URL_REGEX.test(href)) {
    return { rel: "noreferrer noopener", target: "_blank" };
  }
};

export const Anchor = React.forwardRef<HTMLAnchorElement, AnchorProps>(
  ({ children, icon: Icon, ...props }, ref) => {
    return (
      <StyledAnchor
        as={Boolean(props.href) ? "a" : "button"}
        ref={ref}
        {...secureExternalLink(props.href)}
        {...props}
      >
        {children}
        {Icon && (
          <Icon
            decorative={true}
            color="currentColor"
            size="0.75em"
            marginBottom="0.15em"
            marginLeft="0.5em"
          />
        )}
      </StyledAnchor>
    );
  }
);

Anchor.displayName = "Anchor";

Anchor.propTypes = {
  ...marginPropTypes,
  icon: PropTypes.func,
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(Object.values(AnchorVariant)),
  href: PropTypes.string,
  target: PropTypes.oneOf(Object.values(AnchorTarget)),
  rel: PropTypes.string,
  noUnderline: PropTypes.bool,
};

Anchor.defaultProps = {
  variant: AnchorVariant.PRIMARY,
  noUnderline: false,
};
