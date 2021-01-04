import { ThemeVariants } from "@twilio-labs/match-themes";

export type MatchState = {
  theme: ThemeVariants;
  filterText: string;
};

export type Token = [string, string | number];
