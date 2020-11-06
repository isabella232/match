import * as React from "react";
import { Token } from "../../types";
import { hex, score } from "wcag-contrast";
import { useTheme } from "@twilio-labs/match-themes";
import styles from "./styles.module.css";
import { camelCase } from "lodash";

interface TextColorTokensProps {
  tokens: Token[];
}

const TextColorTokens: React.FC<TextColorTokensProps> = ({ tokens }) => {
  const { backgroundColors } = useTheme();
  const parsedTokens = React.useMemo(
    () =>
      tokens.map(([name, value]) => {
        const bg1 = name.includes("inverse")
          ? backgroundColors.blue
          : backgroundColors.white;
        const bg2 = name.includes("inverse")
          ? backgroundColors.darkest
          : backgroundColors.light;
        return {
          name: camelCase(`textColor ${name}`),
          value: value,
          score1: score(hex(value, bg1)),
          score2: score(hex(value, bg2)),
          style1: {
            color: value,
            backgroundColor: bg1,
          },
          style2: {
            color: value,
            backgroundColor: bg2,
          },
        };
      }),
    [tokens, backgroundColors]
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
        {parsedTokens.map((token) => (
          <tr key={token.name}>
            <td>{token.name}</td>
            <td>{token.value}</td>
            <td>
              <div className={styles.textColorExample}>
                <div style={token.style1}>{token.score1}</div>
                <div style={token.style2}>{token.score2}</div>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export { TextColorTokens };
