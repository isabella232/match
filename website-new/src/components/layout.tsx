import * as React from "react";
import { MatchProvider } from "../context/match";
import "@twilio-labs/match-fonts";
import "@twilio-labs/match-tokens/twilio/variables.css";

export const Layout: React.FC = (props) => <MatchProvider {...props} />;
