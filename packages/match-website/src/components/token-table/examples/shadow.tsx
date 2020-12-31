import React from "react";
import { useTheme } from "@twilio-labs/match-themes";
import styles from "./examples.module.css";
import { TokenItem } from "../token-table";

export type ShadowProps = {
  token: TokenItem;
};

export const Shadow: React.FC<ShadowProps> = ({ token: [name, value] }) => {
  const { backgroundColorBlue } = useTheme();

  return (
    <div
      style={{
        background: name === "inverse" ? backgroundColorBlue : undefined,
        padding: "var(--ifm-table-cell-padding)",
        margin: "calc(-1 * var(--ifm-table-cell-padding))",
      }}
    >
      <div
        style={{ boxShadow: value as string }}
        className={styles.rectangleExample}
      ></div>
    </div>
  );
};
