/** @jsx jsx */
import * as React from "react";
import * as PropTypes from "prop-types";
import { jsx } from "theme-ui";
import * as Styles from "./styles";

const Link: React.FC = ({ children, href }) =>
  href.startsWith("http://") || href.startsWith("https://") ? (
    <a href={href} target="_blank" rel="noreferrer nofollow" sx={Styles.link}>
      {children}
    </a>
  ) : (
    <a href={href}>{children}</a>
  );

Link.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
};

export { Link };
