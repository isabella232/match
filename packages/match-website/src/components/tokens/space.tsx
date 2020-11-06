import * as React from "react";
import { camelCase } from "lodash";
import { remToPx } from "../../utils";
import { Token } from "../../types";
import styles from "./styles.module.css";

interface BorderWidthTokensProps {
  tokens: Token[];
  prefix: string;
}

const SpacingTokens: React.FC<BorderWidthTokensProps> = ({
  prefix,
  tokens,
}) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Token</th>
            <th>Value (px)</th>
            <th>Value (rem)</th>
            <th>Example</th>
          </tr>
        </thead>
        <tbody>
          {tokens.map(([name, value]) => (
            <tr key={prefix + name}>
              <td>{camelCase(`${prefix} ${name}`)}</td>
              <td>{remToPx(value)}</td>
              <td>{value}</td>
              <td>
                <div
                  className={styles.spacingExample}
                  style={{ width: value, height: value }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export { SpacingTokens };
