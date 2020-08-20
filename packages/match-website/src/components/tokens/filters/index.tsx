/** @jsx jsx */
import { jsx } from "theme-ui";
import * as React from "react";
import { ThemeVariants } from "@twilio-labs/match-themes";
import { MatchActions } from "../../../reducers/match";
import { MatchContext } from "../../../context/match";
import * as styles from "./styles";

const TokenFilters: React.FC = () => {
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

  const handleThemeChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    dispatch({
      type: MatchActions.SetMatchTheme,
      payload: ThemeVariants[e.currentTarget.value],
    });
  };

  return (
    <form sx={styles.container}>
      <input
        sx={styles.input}
        placeholder="Filter design tokens..."
        type="text"
        value={filterText}
        onChange={handleFilterChange}
      />
      <select sx={styles.input} onBlur={handleThemeChange}>
        {Object.entries(ThemeVariants).map(([key, val]) => (
          <option key={key} value={key}>
            {val}
          </option>
        ))}
      </select>
    </form>
  );
};

export { TokenFilters };
