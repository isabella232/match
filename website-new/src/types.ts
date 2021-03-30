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
