import * as React from "react";
import * as components from "@twilio-labs/match-components";
import { ChatIcon } from "@twilio-labs/match-icons-twilio";

const ReactLiveScope = {
  React,
  ...React,
  ...components,
  ChatIcon,
};

export default ReactLiveScope;
