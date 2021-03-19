import * as React from "react";
import { useTheme } from "@twilio-labs/match-themes";
import { hex, score } from "wcag-contrast";
import { Token } from "../../../types";
import { textColorExample } from "./examples.module.css";

export type TextColorProps = {
  token: Token;
};

export const TextColor: React.FC<TextColorProps> = ({
  token: [name, value],
}) => {
  const { backgroundColors } = useTheme();
  const bg1 = name.includes("inverse")
    ? backgroundColors.blue
    : backgroundColors.white;
  const bg2 = name.includes("inverse")
    ? backgroundColors.darkest
    : backgroundColors.light;
  return (
    <div className={textColorExample}>
      <div
        style={{
          color: value as string,
          background: bg1,
        }}
      >
        {score(hex(value, bg1))}
      </div>
      <div
        style={{
          color: value as string,
          background: bg2,
        }}
      >
        {score(hex(value, bg2))}
      </div>
    </div>
  );
};
