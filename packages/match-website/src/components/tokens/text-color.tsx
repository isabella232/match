import * as React from "react";
import { ColorTranslator } from "colortranslator";
import { ColorToken } from "../../types/tokens";
import { hex, score } from "wcag-contrast";
import { useTheme } from "@twilio-labs/match-themes";
import styles from "./styles.module.css";

interface TextColorTokensProps {
  tokens: ColorToken[];
}

const TextColorTokens: React.FC<TextColorTokensProps> = ({ tokens }) => {
  const { background } = useTheme();
  const parsedTokens = React.useMemo(
    () =>
      tokens.map(([name, token]) => {
        const backgroundColors = name.includes("inverse")
          ? {
              bg1: ColorTranslator.toHEX(background.blue.color),
              bg2: ColorTranslator.toHEX(background.darkest.color),
            }
          : {
              bg1: ColorTranslator.toHEX(background.white.color),
              bg2: ColorTranslator.toHEX(background.light.color),
            };
        const value = ColorTranslator.toHEX(token.color);
        return {
          name: name,
          value: value,
          backgroundColors: backgroundColors,
          score1: score(hex(value, backgroundColors.bg1)),
          score2: score(hex(value, backgroundColors.bg2)),
          style1: {
            color: token.color,
            backgroundColor: backgroundColors.bg1,
          },
          style2: {
            color: token.color,
            backgroundColor: backgroundColors.bg2,
            marginLeft: "2px",
          },
        };
      }),
    [tokens, background]
  );
  return (
    <table>
      <thead>
        <tr>
          <th>Token</th>
          <th>Value</th>
          <th>Example</th>
        </tr>
      </thead>
      <tbody>
        {parsedTokens.map((textColor) => (
          <tr key={textColor.name}>
            <td>{`text.${textColor.name}.color`}</td>
            <td>{textColor.value}</td>
            <td>
              <div style={{ display: "inline" }}>
                <div
                  className={styles.textColorBackground}
                  style={textColor.style1}
                >
                  {textColor.score1}
                </div>
                <div
                  className={styles.textColorBackground}
                  style={textColor.style2}
                >
                  {textColor.score2}
                </div>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export { TextColorTokens };
