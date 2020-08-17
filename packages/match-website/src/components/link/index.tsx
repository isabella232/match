/** @jsx jsx */
import * as React from "react";
import * as PropTypes from "prop-types";
import { jsx } from "theme-ui";
import * as Styles from "./styles";

interface LinkProps extends React.HTMLAttributes<"a"> {
  href: string;
}

const Link: React.FC<LinkProps> = ({ children, href }) =>
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
