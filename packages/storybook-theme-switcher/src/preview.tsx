import * as React from "react";
import { MatchThemeProvider, ThemeVariants } from "@twilio-labs/match-themes";
import addons, { makeDecorator, Channel } from "@storybook/addons";
import { PARAM_KEY, STORAGE_ID, SET, CHANGED } from "./constants";

interface ThemeWrapperProps {
  channel: Channel;
}

const ThemeWrapper: React.FC<ThemeWrapperProps> = ({ channel, ...props }) => {
  const [matchTheme, setMatchTheme] = React.useState<ThemeVariants>(
    (sessionStorage.getItem(STORAGE_ID) as ThemeVariants) ||
      ThemeVariants.TWILIO
  );

  const handleThemeChange = (theme: ThemeVariants) => {
    setMatchTheme(theme);
    sessionStorage.setItem(STORAGE_ID, theme);
    channel.emit(CHANGED, theme);
  };

  React.useEffect(() => {
    channel.addListener(SET, handleThemeChange);
    return () => channel.removeListener(SET, handleThemeChange);
  }, []);

  return <MatchThemeProvider theme={matchTheme} {...props} />;
};

const withTheme = makeDecorator({
  name: "withThemeSwitcher",
  parameterName: PARAM_KEY,
  wrapper: (getStory, context) => {
    return (
      <ThemeWrapper channel={addons.getChannel()}>
        {getStory(context)}
      </ThemeWrapper>
    );
  },
});

export { withTheme };