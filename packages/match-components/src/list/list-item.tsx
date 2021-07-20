import * as React from "react";
import * as PropTypes from "prop-types";

import type { ListItemProps } from "./types";
import { StyledListItem, StyledAdditional } from "./styles";

export const ListItem = React.forwardRef<HTMLLIElement, ListItemProps>(
  ({ children, additional, ...props }, ref) => (
    <StyledListItem ref={ref} {...props}>
      {children}
      {additional && <StyledAdditional>{additional}</StyledAdditional>}
    </StyledListItem>
  )
);

ListItem.displayName = "ListItem";

ListItem.propTypes = {
  children: PropTypes.node.isRequired,
  additional: PropTypes.string,
};
