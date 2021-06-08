import * as PropTypes from "prop-types";
import * as React from "react";
import { marginPropTypes } from "@twilio-labs/match-props";
import { AnchorVariant, AnchorTarget } from "./constants";
import { StyledAnchor } from "./styles";
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
        {React.Children.map(children, (child) => {
          if (typeof child === "string") {
            return child.trim();
          }
          if (
            React.isValidElement(child) &&
            child.type["displayName"].endsWith("Icon")
          ) {
            return React.cloneElement(child, {
              color: "currentColor",
              size: "0.75em",
              marginBottom: "0.15em",
              marginLeft: "0.5em",
            });
          }
          return child;
        })}
      </StyledAnchor>
    );
  }
);

Anchor.displayName = "Anchor";

Anchor.propTypes = {
  ...marginPropTypes,
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
