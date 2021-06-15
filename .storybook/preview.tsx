import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { MatchThemeProvider, ThemeVariants } from "@twilio-labs/match-themes";

export const parameters = {
  backgrounds: {
    default: "White",
    values: [
      {
        name: "White",
        value: "#FFFFFF",
      },
      {
        name: "Light",
        value: "#F4F4F6",
      },
      {
        name: "Darkest",
        value: "#06033A",
      },
      {
        name: "Twilio Blue",
        value: "#001489",
      },
      {
        name: "SendGrid Blue",
        value: "#0263E0",
      },
    ],
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
};

export const globalTypes = {
  theme: {
    name: "Theme",
    description: "Match theme",
    defaultValue: ThemeVariants.TWILIO,
    toolbar: {
      icon: "switchalt",
      items: Object.values(ThemeVariants).map((theme) => ({
        value: theme,
        title: theme,
      })),
    },
  },
};

const withThemeProvider = (Story, context) => {
  return (
    <MatchThemeProvider theme={context.globals.theme}>
      <Story {...context} />
    </MatchThemeProvider>
  );
};

export const decorators = [withThemeProvider];
