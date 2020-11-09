import * as React from "react";
import { Token } from "../../types";

interface BreakpointTokensProps {
  tokens: Token[];
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
          {tokens.map(([name, value]) => (
            <tr key={"breakpoint" + name}>
              <td>{`breakpoints.${name}`}</td>
              <td>{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export { BreakpointTokens };
