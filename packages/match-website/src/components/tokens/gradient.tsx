import * as React from "react";
import { Token } from "../../types";
import styles from "./styles.module.css";

interface GradientTokensProps {
  tokens: Token[];
  prefix: string;
}

const GradientTokens: React.FC<GradientTokensProps> = ({ tokens, prefix }) => {
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
            <td>{`${prefix}.${name}`}</td>
            <td>{value.slice(16, -1)}</td>
            <td>
              <div
                style={{ background: value }}
                className={styles.rectangleExample}
              ></div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export { GradientTokens };
