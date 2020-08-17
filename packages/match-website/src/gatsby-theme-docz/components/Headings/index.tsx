/** @jsx jsx */

import * as PropTypes from "prop-types";
import { jsx, SxStyleProp } from "theme-ui";
import * as Styles from "./styles";

interface H2Props extends React.HTMLAttributes<"h2"> {
  href: string;
  id: string;
  sx: SxStyleProp;
}

const h2: React.FC<H2Props> = ({ children, id }) => (
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

interface H3Props extends React.HTMLAttributes<"h3"> {
  href: string;
  sx: SxStyleProp;
}

const h3: React.FC<H3Props> = ({ children, id }) => (
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

interface H4Props extends React.HTMLAttributes<"h4"> {
  href: string;
}

const h4: React.FC<H4Props> = ({ children, id }) => (
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
