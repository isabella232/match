import * as React from "react";
import { ThemeVariants, MatchThemeProvider } from "@twilio-labs/match-themes";
import { MatchActionTypes, matchReducer } from "../reducers/match";
import { MatchState } from "../types/match";

const initialState = {
  theme: ThemeVariants.TWILIO,
  filterText: "",
};

const MatchContext = React.createContext<{
  state: MatchState;
  dispatch: React.Dispatch<MatchActionTypes>;
}>({
  state: initialState,
  dispatch: () => {
    void 0;
  },
});

const MatchProvider: React.FC = ({ children }) => {
  const [state, dispatch] = React.useReducer(matchReducer, initialState);
  return (
    <MatchContext.Provider value={{ state, dispatch }}>
      <MatchThemeProvider theme={state.theme}>{children}</MatchThemeProvider>
    </MatchContext.Provider>
  );
};

export { MatchContext, MatchProvider };
