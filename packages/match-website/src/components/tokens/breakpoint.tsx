import * as React from "react";
import { camelCase } from "lodash";
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
            <tr key={name}>
              <td>{camelCase(`breakpoint ${name}`)}</td>
              <td>{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export { BreakpointTokens };
