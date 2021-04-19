import * as React from "react";
import { ThemeVariants } from "@twilio-labs/match-themes";
import { useTabState, Tab, TabList } from "reakit/Tab";
import { MatchActions } from "../../reducers/match";
import { MatchContext } from "../../context/match";
import { tabList } from "./styles.module.css";

const ThemeSwitcher: React.FC = () => {
  const {
    dispatch,
    state: { theme },
  } = React.useContext(MatchContext);
  const tab = useTabState({ selectedId: theme });
  console.log(theme, tab.selectedId, tab.currentId);

  React.useEffect(() => {
    if (!tab.selectedId || theme === tab.selectedId) return;
    dispatch({
      type: MatchActions.SetMatchTheme,
      payload: tab.selectedId as ThemeVariants,
    });
  }, [tab.selectedId, dispatch]);

  return (
    <TabList {...tab} className={tabList} aria-label="Match themes">
      {Object.entries(ThemeVariants).map(([key, val]) => {
        if (val === "Ahoy") return;
        return (
          <Tab {...tab} key={key} id={val}>
            {val}
          </Tab>
        );
      })}
    </TabList>
  );
};

export { ThemeSwitcher };
