/** @jsx jsx */
import * as React from "react";
import * as PropTypes from "prop-types";
import { jsx } from "theme-ui";
import * as Styles from "./styles";

const h2: React.FC = ({ children, id }) => (
  <h2 id={id} sx={Styles.h2}>
    <a href={`#${id}`} sx={Styles.link}>
      {children}
    </a>
  </h2>
);

h2.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired,
};

const h3: React.FC = ({ children, id }) => (
  <h3 id={id} sx={Styles.h3}>
    <a href={`#${id}`} sx={Styles.link}>
      {children}
    </a>
  </h3>
);

h3.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired,
};

const h4: React.FC = ({ children, id }) => (
  <h4 id={id} sx={Styles.h4}>
    <a href={`#${id}`} sx={Styles.link}>
      {children}
    </a>
  </h4>
);

h4.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired,
};

export { h2 };
export { h3 };
export { h4 };
