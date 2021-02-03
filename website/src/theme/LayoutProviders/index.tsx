import * as React from "react";
import OriginalLayoutProviders from "@theme-original/LayoutProviders";
import { MatchProvider } from "match-website/src/context/match";

const LayoutProviders: React.FC<any> = (props) => (
  <MatchProvider>
    <OriginalLayoutProviders {...props} />
  </MatchProvider>
);

export default LayoutProviders;
