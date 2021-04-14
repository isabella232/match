import { Icon } from "@twilio-labs/match-primitives";
import { ThemeVariants } from "@twilio-labs/match-themes";

export type MatchState = {
  theme: ThemeVariants;
  filterText: string;
};

export type Token = {
  group: string;
  name: string;
  value: string;
  tags: string[];
};

export type IconItem = {
  category: string;
  name: string;
  icon: typeof Icon;
};
