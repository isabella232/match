import React from "react";
import { useTheme } from "@twilio-labs/match-themes";
import styles from "./examples.module.css";

export type ShadowsProps = {
  name: string;
  value: string;
};

export const Shadows: React.FC<ShadowsProps> = ({ name, value }) => {
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
        style={{ boxShadow: value }}
        className={styles.rectangleExample}
      ></div>
    </div>
  );
};
