import * as React from "react";
import { camelCase } from "lodash";
import { Token } from "../../types";

interface ColorTokensProps {
  tokens: Token[];
  prefix: string;
}

const ColorTokens: React.FC<ColorTokensProps> = ({ tokens, prefix }) => {
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
            <td>
              <svg height="42" width="150" stroke="#E1E3EA" strokeWidth="1">
                <circle cx="40" cy="21" r="20" fill={value} />
              </svg>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export { ColorTokens };
