import * as React from "react";
import * as PropTypes from "prop-types";
import { StyledAnchor } from "./styles";
import { AnchorVariant, AnchorProps } from "./types";

export interface ExternalProps {
  rel: string | undefined;
  target: string | undefined;
}

const EXTERNAL_URL_REGEX = /^(https?:)\S*$/;

const secureExternalLink = (href: string | undefined): ExternalProps => {
  if (href) {
    if (EXTERNAL_URL_REGEX.test(href)) {
      return { rel: "noreferrer noopener", target: "_blank" };
    }
  }
  return { rel: undefined, target: undefined };
};

const Anchor: React.FC<AnchorProps> = ({ ...props }) => {
  if (!props.href) console.warn("href must be provided for an anchor");
  const externalURL = secureExternalLink(props.href);
  return (
    <StyledAnchor
      {...props}
      rel={props.rel ? props.rel : externalURL.rel}
      target={props.target ? props.target : externalURL.target}
    />
  );
};

Anchor.propTypes = {
  variant: PropTypes.oneOf(Object.values(AnchorVariant)),
  href: PropTypes.string,
  target: PropTypes.string,
  rel: PropTypes.string,
  noUnderline: PropTypes.bool,
};

Anchor.defaultProps = {
  variant: AnchorVariant.TEXT,
  noUnderline: false,
};

export { Anchor, AnchorVariant, AnchorProps };
