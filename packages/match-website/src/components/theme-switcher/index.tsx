import * as React from "react";
import { ThemeVariants } from "@twilio-labs/match-themes";
import { useTabState, Tab, TabList } from "reakit/Tab";
import { MatchActions } from "../../reducers/match";
import { MatchContext } from "../../context/match";
import styles from "./styles.module.css";

interface ThemeSwitcherProps {
  noDescription?: boolean;
}

const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ noDescription }) => {
  const {
    dispatch,
    state: { theme },
  } = React.useContext(MatchContext);
  const tab = useTabState({ selectedId: theme });

  React.useEffect(() => {
    if (!tab.selectedId || theme === tab.selectedId) return;
    dispatch({
      type: MatchActions.SetMatchTheme,
      payload: tab.selectedId as ThemeVariants,
    });
  }, [theme, tab.selectedId, dispatch]);

  return (
    <>
      {!noDescription && (
        <p>
          We currently serve four different themes: Twilio, SendGrid, Signal,
          and Ahoy.
        </p>
      )}
      <TabList {...tab} className={styles.tabList} aria-label="Match themes">
        {Object.entries(ThemeVariants).map(([key, val]) => (
          <Tab {...tab} key={key} id={val}>
            {val}
          </Tab>
        ))}
      </TabList>
    </>
  );
};

export { ThemeSwitcher };
