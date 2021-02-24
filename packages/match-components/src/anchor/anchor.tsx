import * as React from "react";
import * as PropTypes from "prop-types";
import { StyledAnchor } from "./styles";
import { AnchorVariant, AnchorTarget } from "./constants";
import type { AnchorProps } from "./types";

const EXTERNAL_URL_REGEX = /^(https?:)\S*$/;

const secureExternalLink = (
  href: string
): Record<string, unknown> | undefined => {
  if (EXTERNAL_URL_REGEX.test(href)) {
    return { rel: "noreferrer noopener", target: "_blank" };
  }
};

export const Anchor = React.forwardRef<HTMLAnchorElement, AnchorProps>(
  ({ children, ...props }, ref) => {
    return (
      <StyledAnchor ref={ref} {...secureExternalLink(props.href)} {...props}>
        {React.Children.map(children, (child) =>
          typeof child === "string" ? child.trim() : child
        )}
      </StyledAnchor>
    );
  }
);

Anchor.displayName = "Anchor";

Anchor.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(Object.values(AnchorVariant)),
  href: PropTypes.string.isRequired,
  target: PropTypes.oneOf(Object.values(AnchorTarget)),
  rel: PropTypes.string,
  noUnderline: PropTypes.bool,
};

Anchor.defaultProps = {
  variant: AnchorVariant.PRIMARY,
  noUnderline: false,
};
