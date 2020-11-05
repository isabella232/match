import * as React from "react";
import { camelCase } from "lodash";
import { useTheme } from "@twilio-labs/match-themes";
import { Token } from "../../types";
import styles from "./styles.module.css";

interface ShadowTokensProps {
  tokens: Token[];
  prefix: string;
}

const ShadowTokens: React.FC<ShadowTokensProps> = ({ tokens, prefix }) => {
  const { backgroundColorBlue } = useTheme();
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
        {tokens.map(([name, value]) => (
          <tr key={prefix + name}>
            <td>{camelCase(`${prefix} ${name}`)}</td>
            <td>{value}</td>
            <td
              style={{
                background:
                  name === "inverse" ? backgroundColorBlue : undefined,
              }}
            >
              <div
                style={{ boxShadow: value }}
                className={styles.rectangleExample}
              ></div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export { ShadowTokens };
