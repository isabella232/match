import * as React from "react";
import * as PropTypes from "prop-types";
import { useMenuState, Menu, MenuItem, MenuButton } from "reakit/Menu";
import type { SnippetSelectorProps, SnippetGroupProps } from "./types";

const SnippetSelector: React.FC<SnippetSelectorProps> = ({ children }) => {
  const menu = useMenuState();
  return (
    <div>
      <MenuButton {...menu}>Select sample...</MenuButton>
      <Menu {...menu}>
        {React.Children.map(
          children,
          ({ props: { title } }: React.ReactElement<SnippetGroupProps>) => (
            <MenuItem {...menu}>{title}</MenuItem>
          )
        )}
      </Menu>
      {React.Children.map(children, (child) => (
        <div>{child}</div>
      ))}
    </div>
  );
};

SnippetSelector.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element.isRequired).isRequired,
};

SnippetSelector.displayName = "SnippetSelector";

export { SnippetSelector };
