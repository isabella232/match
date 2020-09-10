import * as React from "react";
import { WeightToken } from "../../types/tokens";

interface WeightTokensProps {
  tokens: WeightToken[];
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
          {tokens.map(([name, token]) => (
            <tr key={name}>
              <td>{`${prefix}.${name}.value`}</td>
              <td>{token.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export { WeightTokens };
