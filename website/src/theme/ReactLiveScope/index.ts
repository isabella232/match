import * as React from "react";
import { Formik } from "formik";
import * as components from "@twilio-labs/match-components";
import {
  ChatIcon,
  TerminalIcon,
  OutboundIcon,
  ExpandIcon,
  DownloadIcon,
} from "@twilio-labs/match-icons-twilio";
import { AirbnbLogo } from "@twilio-labs/match-logos-mono";
import { ChimeLogo } from "@twilio-labs/match-logos-color";

const ReactLiveScope = {
  React,
  Formik,
  ...React,
  ...components,
  ChatIcon,
  TerminalIcon,
  OutboundIcon,
  ExpandIcon,
  DownloadIcon,
  AirbnbLogo,
  ChimeLogo,
};

export default ReactLiveScope;
