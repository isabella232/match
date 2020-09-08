import * as React from "react";
import { UnitToken } from "../../types/tokens";

interface BreakpointTokensProps {
  tokens: UnitToken[];
}

const UnitTokens: React.FC<BreakpointTokensProps> = ({ tokens }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Token</th>
            <th>Value (px)</th>
            <th>Value (rem)</th>
          </tr>
        </thead>
        <tbody>
          {tokens.map(([name, token]) => (
            <tr key={name}>
              <td>{`fontSize.${name}.rem`}</td>
              <td>{token.px}</td>
              <td>{token.rem}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export { UnitTokens };
