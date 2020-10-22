import * as React from "react";
import { UnitToken } from "../../types/tokens";
import styles from "./styles.module.css";

interface BorderWidthTokensProps {
  tokens: UnitToken[];
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
          {tokens.map(([name, token]) => (
            <tr key={name}>
              <td>{`${prefix}.${name}.rem`}</td>
              <td>{token.px}</td>
              <td>{token.rem}</td>
              <td>
                <div
                  className={styles.borderExample}
                  style={{ borderWidth: token.rem }}
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
