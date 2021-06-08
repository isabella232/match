import clsx from "clsx";
import * as React from "react";
import { useMenuState, Menu, MenuItem, MenuButton } from "reakit/Menu";
import { MatchContext } from "../../../context/match";
import { MatchActions } from "../../../reducers/match";
import { IconItem as Icon, Token } from "../../../types";
import dropdownSvg from "./images/dropdown.svg";
import searchSvg from "./images/search.svg";
import {
  container,
  control,
  search,
  dropdown,
  dropdownMenu,
} from "./styles.module.css";

export interface IconFiltersProps {
  icons: { [category: string]: Icon[] };
  hasAnyIcons: boolean;
}

export const IconFilters: React.FC<IconFiltersProps> = ({
  icons,
  hasAnyIcons,
}) => {
  const menu = useMenuState();
  const {
    dispatch,
    state: { filterText },
  } = React.useContext(MatchContext);

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch({
      type: MatchActions.SetFilterText,
      payload: e.currentTarget.value,
    });
  };

  return (
    <form className={container} onSubmit={(event) => event.preventDefault()}>
      <div className={clsx(control, search)}>
        <img src={searchSvg} alt="" />
        <input
          placeholder="Filter icons..."
          type="text"
          value={filterText}
          onChange={handleFilterChange}
        />
      </div>
      <div className={clsx(control, dropdown)}>
        <MenuButton disabled={!hasAnyIcons} {...menu}>
          Jump to
        </MenuButton>
        <img src={dropdownSvg} alt="" />
        <Menu className={dropdownMenu} aria-label="icon categories" {...menu}>
          {Object.entries(icons)
            .filter(([, icons]) => icons.length > 0)
            .sort()
            .map(([category]) => (
              <MenuItem
                key={category}
                as="a"
                href={
                  "#" +
                  category.replace(/([a-z])([A-Z])/g, `$1-$2`).toLowerCase()
                }
                onClick={menu.hide}
                {...menu}
              >
                {category}
              </MenuItem>
            ))}
        </Menu>
      </div>
    </form>
  );
};

export interface TokenFiltersProps {
  tokens: {
    [category: string]: Token[];
  };
  hasAnyTokens: boolean;
}

const formatCategoryName = (category: string): string => {
  switch (category) {
    case "radii":
      return "Border Radii";
    default:
      return (
        category.charAt(0).toUpperCase() +
        category.replace(/([a-z])([A-Z])/g, `$1 $2`).slice(1)
      );
  }
};

export const TokenFilters: React.FC<TokenFiltersProps> = ({
  tokens,
  hasAnyTokens,
}) => {
  const menu = useMenuState();
  const {
    dispatch,
    state: { filterText },
  } = React.useContext(MatchContext);

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch({
      type: MatchActions.SetFilterText,
      payload: e.currentTarget.value,
    });
  };

  return (
    <form className={container} onSubmit={(event) => event.preventDefault()}>
      <div className={clsx(control, search)}>
        <img src={searchSvg} alt="" />
        <input
          placeholder="Filter design tokens..."
          type="text"
          value={filterText}
          onChange={handleFilterChange}
        />
      </div>
      <div className={clsx(control, dropdown)}>
        <MenuButton disabled={!hasAnyTokens} {...menu}>
          Jump to
        </MenuButton>
        <img src={dropdownSvg} alt="" />
        <Menu className={dropdownMenu} aria-label="token categories" {...menu}>
          {Object.entries(tokens)
            .filter(([, tokens]) => tokens.length > 0)
            .sort()
            .map(([category]) => (
              <MenuItem
                key={category}
                as="a"
                href={
                  "#" +
                  category.replace(/([a-z])([A-Z])/g, `$1-$2`).toLowerCase()
                }
                onClick={menu.hide}
                {...menu}
              >
                {formatCategoryName(category)}
              </MenuItem>
            ))}
        </Menu>
      </div>
    </form>
  );
};
