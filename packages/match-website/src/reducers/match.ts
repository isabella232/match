import { ThemeVariants } from "@twilio-labs/match-themes";
import { MatchState } from "../types/match";

enum MatchActions {
  SetMatchTheme = "SET_MATCH_THEME",
  SetFilterText = "SET_FILTER_TEXT",
}

type MatchActionTypes =
  | {
      type: MatchActions.SetMatchTheme;
      payload: ThemeVariants;
    }
  | {
      type: MatchActions.SetFilterText;
      payload: string;
    };

const matchReducer = (
  state: MatchState,
  action: MatchActionTypes
): MatchState => {
  switch (action.type) {
    case MatchActions.SetMatchTheme:
      return { ...state, theme: action.payload };
    case MatchActions.SetFilterText:
      return { ...state, filterText: action.payload };
    default:
      return state;
  }
};

export { matchReducer, MatchActions, MatchActionTypes };
