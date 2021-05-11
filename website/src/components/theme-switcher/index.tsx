import * as React from "react";
import clsx from "clsx";
import { ThemeVariants } from "@twilio-labs/match-themes";
import { useTabState, Tab, TabList } from "reakit/Tab";
import twilioIcon from "../../images/logos/twilio.svg";
import sendgridIcon from "../../images/logos/sendgrid.svg";
import { MatchActions } from "../../reducers/match";
import { MatchContext } from "../../context/match";
import { tabList, snippet, inverseSnippet, header } from "./styles.module.css";

interface ThemeSwitcherProps {
  variant: "snippet" | "inverseSnippet" | "header";
}

const icons = {
  [ThemeVariants.TWILIO]: twilioIcon,
  [ThemeVariants.SENDGRID]: sendgridIcon,
};

const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ variant }) => {
  const {
    dispatch,
    state: { theme },
  } = React.useContext(MatchContext);

  const tab = useTabState({ selectedId: theme });

  // Handle theme change onClick
  const handleThemeChange = (theme: string) => {
    if (!theme) return;
    dispatch({
      type: MatchActions.SetMatchTheme,
      payload: theme as ThemeVariants,
    });
  };

  // Listen for theme changes from elsewhere (multiple <ThemeSwitcher/>s)
  React.useEffect(() => {
    if (!tab.selectedId || theme === tab.selectedId) return;
    tab.setSelectedId(theme);
  }, [theme, tab]);

  return (
    <TabList
      {...tab}
      className={clsx(tabList, {
        [inverseSnippet]: variant === "inverseSnippet",
        [snippet]: variant === "snippet",
        [header]: variant === "header",
      })}
      aria-label="Match themes"
    >
      {Object.entries(ThemeVariants).map(([key, val]) => {
        if (val === "Ahoy") return;
        return (
          <Tab
            {...tab}
            key={key}
            id={val}
            onClick={() => handleThemeChange(val)}
          >
            {variant === "header" && (
              <img src={icons[val]} alt="" aria-hidden="true" />
            )}
            {val}
          </Tab>
        );
      })}
    </TabList>
  );
};

export { ThemeSwitcher };
