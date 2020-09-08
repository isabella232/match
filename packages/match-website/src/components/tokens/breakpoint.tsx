import * as React from "react";
import { BreakpointToken } from "../../types/tokens";

interface BreakpointTokensProps {
  tokens: BreakpointToken[];
}

const BreakpointTokens: React.FC<BreakpointTokensProps> = ({ tokens }) => {
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
              <td>{`breakpoint.${name}.mediaQuery`}</td>
              <td>{token.mediaQuery}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export { BreakpointTokens };
