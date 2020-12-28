import * as React from "react";
import * as PropTypes from "prop-types";
import { StyledAnchor } from "./styles";
import { AnchorVariant } from "./types";
import type { AnchorTarget, AnchorProps } from "./types";

const EXTERNAL_URL_REGEX = /^(https?:)\S*$/;

const secureExternalLink = (
  href: string
): Record<string, unknown> | undefined => {
  if (EXTERNAL_URL_REGEX.test(href)) {
    return { rel: "noreferrer noopener", target: "_blank" };
  }
};

const Anchor = React.forwardRef<HTMLAnchorElement, AnchorProps>(
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
  variant: PropTypes.oneOf(Object.values(AnchorVariant)),
  href: PropTypes.string.isRequired,
  target: PropTypes.oneOf(["_self", "_blank", "_parent", "_top"]),
  rel: PropTypes.string,
  noUnderline: PropTypes.bool,
};

Anchor.defaultProps = {
  variant: AnchorVariant.PRIMARY,
  noUnderline: false,
};

export { Anchor, AnchorVariant };
export type { AnchorTarget, AnchorProps };
