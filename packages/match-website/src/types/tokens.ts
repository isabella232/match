import { Color, MediaQuery, Unit } from "@twilio-labs/match-tokens";

export type ColorToken = [string, Color];
export type BreakpointToken = [string, MediaQuery];
export type StringToken = [string, string];
export type UnitToken = [string, Unit];
