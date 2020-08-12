import { MatchThemeProvider } from "./theme-provider";
import { MatchThemeConsumer } from "./theme-consumer";

export { ThemeVariants } from "./constants";

export const Theme = {
  Provider: MatchThemeProvider,
  Consumer: MatchThemeConsumer,
};
