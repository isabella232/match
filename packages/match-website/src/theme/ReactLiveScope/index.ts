import * as React from "react";
import * as components from "@twilio-labs/match-components";

const ReactLiveScope = {
  React,
  ...React,
  ...components,
};

export default ReactLiveScope;
