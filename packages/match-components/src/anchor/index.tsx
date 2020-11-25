import * as React from "react";
import * as PropTypes from "prop-types";
import { uid } from "react-uid";
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
        {Array.isArray(children)
          ? children.map((child) => {
              if (React.isValidElement(child))
                return React.cloneElement(child, { key: uid(child) });
              if (typeof child === "string") return child.trim();
            })
          : children}
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
