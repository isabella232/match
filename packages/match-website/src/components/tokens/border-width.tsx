import * as React from "react";
import { camelCase } from "lodash";
import { Token } from "../../types";
import { remToPx } from "../../utils";
import styles from "./styles.module.css";

interface BorderWidthTokensProps {
  tokens: Token[];
  prefix: string;
}

const BorderWidthTokens: React.FC<BorderWidthTokensProps> = ({
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
            <tr key={name}>
              <td>{camelCase(`${prefix} ${name}`)}</td>
              <td>{remToPx(value)}</td>
              <td>{value}</td>
              <td>
                <div
                  className={styles.borderExample}
                  style={{ borderWidth: value }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export { BorderWidthTokens };
