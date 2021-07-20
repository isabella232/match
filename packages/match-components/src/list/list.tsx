import * as React from "react";
import * as PropTypes from "prop-types";

import type { ListProps } from "./types";
import { StyledList } from "./styles";
import { ListVariant, ListSize } from "./constants";

export const List = React.forwardRef<
  HTMLUListElement | HTMLOListElement,
  ListProps
>(({ variant, ...props }, ref) => (
  <StyledList
    ref={ref}
    as={variant === ListVariant.NUMBERED ? "ol" : "ul"}
    variant={variant}
    {...props}
  />
));

List.displayName = "List";

List.defaultProps = {
  variant: ListVariant.BULLETED,
  size: ListSize.NORMAL,
};

List.propTypes = {
  variant: PropTypes.oneOf(Object.values(ListVariant)),
  inverse: PropTypes.bool,
};
