import * as React from "react";
import { remToPx } from "../../utils";
import { Token } from "../../types";

interface FontSizeTokensProps {
  tokens: Token[];
  prefix: string;
}

const FontSizeTokens: React.FC<FontSizeTokensProps> = ({ prefix, tokens }) => {
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
              <td>{`${prefix}.${name}`}</td>
              <td>{remToPx(value)}</td>
              <td>{value}</td>
              <td style={{ fontSize: value }}>Ab</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export { FontSizeTokens };
