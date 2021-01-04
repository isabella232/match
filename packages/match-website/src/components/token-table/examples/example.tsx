import React from "react";

import { MultiValueTokenItem, SimpleValueTokenItem } from "../token-table";
import { Shadow, TextColor } from ".";
import { useTheme } from "@twilio-labs/match-themes";
import styles from "./examples.module.css";

export type ExampleProps = {
  token: SimpleValueTokenItem | MultiValueTokenItem;
  type:
    | "color"
    | "textColor"
    | "shadow"
    | "border"
    | "fontSize"
    | "gradient"
    | "borderWidth"
    | "spacing";
};

export const Example: React.FC<ExampleProps> = ({ token, type }) => {
  const { colors } = useTheme();
  const [, value] = token;
  let example: any;
  switch (type) {
    case "color":
      example = (
        <svg height="42" width="42" stroke="#E1E3EA" strokeWidth="1">
          <circle cx="21" cy="21" r="20" fill={`${value}`} />
        </svg>
      );
      break;
    case "fontSize":
      example = <span style={{ fontSize: value["rem"] }}>Ab</span>;
      break;
    case "textColor":
      example = <TextColor token={token as SimpleValueTokenItem} />;
      break;
    case "gradient":
      example = (
        <div
          style={{ background: `linear-gradient(${value})` }}
          className={styles.rectangleExample}
        ></div>
      );
      break;
    case "shadow":
      example = <Shadow token={token as SimpleValueTokenItem} />;
      break;
    case "border":
      example = (
        <div
          className={styles.borderExample}
          style={{
            borderColor: colors[value as string] ?? value,
          }}
        />
      );
      break;
    case "borderWidth":
      example = (
        <div
          className={styles.borderExample}
          style={{ borderWidth: value["rem"] }}
        />
      );
      break;
    case "spacing":
      example = (
        <div
          className={styles.spacingExample}
          style={{ width: value["rem"], height: value["rem"] }}
        />
      );
      break;
  }
  return example;
};
