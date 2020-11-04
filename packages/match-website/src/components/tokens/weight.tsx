import * as React from "react";
import { camelCase } from "lodash";
import { NumberToken } from "../../types";

interface WeightTokensProps {
  tokens: NumberToken[];
  prefix: string;
}

const WeightTokens: React.FC<WeightTokensProps> = ({ tokens, prefix }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Token</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {tokens.map(([name, value]) => (
            <tr key={prefix + name}>
              <td>{camelCase(`${prefix} ${name}`)}</td>
              <td>{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export { WeightTokens };
