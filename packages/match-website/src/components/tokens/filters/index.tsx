import * as React from "react";
import { ThemeVariants } from "@twilio-labs/match-themes";
import { MatchActions } from "../../../reducers/match";
import { MatchContext } from "../../../context/match";
import styles from "./styles.module.css";

const TokenFilters: React.FC = () => {
  const {
    dispatch,
    state: { filterText, theme },
  } = React.useContext(MatchContext);

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch({
      type: MatchActions.SetFilterText,
      payload: e.currentTarget.value,
    });
  };

  const handleThemeChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    if (theme === e.currentTarget.value) return;
    dispatch({
      type: MatchActions.SetMatchTheme,
      payload: ThemeVariants[e.currentTarget.value],
    });
  };

  return (
    <form className={styles.container}>
      <input
        placeholder="Filter design tokens..."
        type="text"
        value={filterText}
        onChange={handleFilterChange}
      />
      <select onBlur={handleThemeChange} onChange={handleThemeChange}>
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
