import clsx from "clsx";
import * as React from "react";
import { hex, score } from "wcag-contrast";
import { useTheme } from "@twilio-labs/match-themes";
import { Token } from "../../../types";
import { textColorExample, inverse } from "./examples.module.css";

export type TextColorProps = {
  token: Token;
};

export const TextColor: React.FC<TextColorProps> = ({
  token: { name, value },
}) => {
  const { backgroundColors } = useTheme();
  const isInverse = name.includes("inverse");
  const bg1 = isInverse ? backgroundColors.blue : backgroundColors.white;
  const bg2 = isInverse ? backgroundColors.darkest : backgroundColors.light;
  return (
    <div className={clsx(textColorExample, { [inverse]: isInverse })}>
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
