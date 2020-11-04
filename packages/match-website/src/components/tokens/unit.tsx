import * as React from "react";
import { camelCase } from "lodash";
import { remToPx } from "../../utils";
import { Token } from "../../types";

interface UnitTokensProps {
  tokens: Token[];
  prefix: string;
}

const UnitTokens: React.FC<UnitTokensProps> = ({ prefix, tokens }) => {
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
          {tokens.map(([name, value]) => (
            <tr key={name}>
              <td>{camelCase(`${prefix} ${name}`)}</td>
              <td>{remToPx(value)}</td>
              <td>{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export { UnitTokens };
