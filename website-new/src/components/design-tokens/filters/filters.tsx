import * as React from "react";
import { MatchActions } from "../../../reducers/match";
import { MatchContext } from "../../../context/match";
import { container } from "./styles.module.css";

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

  return (
    <form className={container}>
      <input
        placeholder="Filter design tokens..."
        type="text"
        value={filterText}
        onChange={handleFilterChange}
      />
    </form>
  );
};

export { TokenFilters };
