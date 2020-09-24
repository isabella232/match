import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import "@twilio-labs/match-fonts";

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
