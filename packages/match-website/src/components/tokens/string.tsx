import * as React from "react";
import { StringToken } from "../../types/tokens";

interface BreakpointTokensProps {
  tokens: StringToken[];
  prefix: string;
}

const StringTokens: React.FC<BreakpointTokensProps> = ({ tokens, prefix }) => {
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
              <td>{`${prefix}.${name}`}</td>
              <td>{token}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export { StringTokens };
