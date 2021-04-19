import * as React from "react";
import { ThemeVariants } from "@twilio-labs/match-themes";
import { useTabState, Tab, TabList } from "reakit/Tab";
import { MatchActions } from "../../reducers/match";
import { MatchContext } from "../../context/match";
import { tabList } from "./styles.module.css";

const ThemeSwitcher: React.FC = () => {
  const {
    dispatch,
    state: { theme }
  } = React.useContext(MatchContext);

  const tab = useTabState({ selectedId: theme });

  // Handle theme change onClick
  const handleThemeChange = (theme: string) => {
    if (!theme) return;
    dispatch({
      type: MatchActions.SetMatchTheme,
      payload: theme as ThemeVariants
    });
  };

  // Listen for theme changes from elsewhere (multiple <ThemeSwitcher/>s)
  React.useEffect(() => {
    if (!tab.selectedId || theme === tab.selectedId) return;
    tab.setSelectedId(theme);
  }, [theme, tab]);

  return (
    <TabList {...tab} className={tabList} aria-label="Match themes">
      {Object.entries(ThemeVariants).map(([key, val]) => {
        if (val === "Ahoy") return;
        return (
          <Tab
            {...tab}
            key={key}
            id={val}
            onClick={() => handleThemeChange(val)}
          >
            {val}
          </Tab>
        );
      })}
    </TabList>
  );
};

export { ThemeSwitcher };
