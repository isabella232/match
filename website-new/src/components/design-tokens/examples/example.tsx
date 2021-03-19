import * as React from "react";

import { Token } from "../../../types";
import { Shadow, TextColor } from ".";
import { useTheme } from "@twilio-labs/match-themes";
import {
  rectangleExample,
  borderExample,
  spacingExample,
} from "./examples.module.css";

export type ExampleProps = {
  token: Token;
  // type:
  //   | "color"
  //   | "fontSize"
  //   | "textColor"
  //   | "gradient"
  //   | "shadow"
  //   | "border"
  //   | "borderWidth"
  //   | "spacing";
};

export const Example: React.FC<ExampleProps> = ({ token }) => {
  const { colors } = useTheme();
  const { group, value } = token;
  switch (group) {
    case "colors":
      return (
        <svg height="42" width="42" stroke="#E1E3EA" strokeWidth="1">
          <circle cx="21" cy="21" r="20" fill={value as string} />
        </svg>
      );

    case "fontSize":
      return <span style={{ fontSize: value["rem"] as string }}>Ab</span>;

    case "textColor":
      return <TextColor token={token} />;

    case "gradient":
      return (
        <div
          style={{ background: `linear-gradient(${value as string})` }}
          className={rectangleExample}
        />
      );

    case "shadow":
      return <Shadow token={token} />;

    case "border":
      return (
        <div
          className={borderExample}
          style={{
            borderColor: colors[value as string] ?? (value as string),
          }}
        />
      );

    case "borderWidth":
      return (
        <div className={borderExample} style={{ borderWidth: value["rem"] }} />
      );

    case "spacing":
      return (
        <div
          className={spacingExample}
          style={{ width: value["rem"], height: value["rem"] }}
        />
      );

    default:
      return null;
  }
};
