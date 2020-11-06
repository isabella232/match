import * as React from "react";
import { camelCase } from "lodash";
import { Token } from "../../types";

interface StringTokensProps {
  tokens: Token[];
  prefix: string;
}

const StringTokens: React.FC<StringTokensProps> = ({ tokens, prefix }) => {
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
            <tr key={prefix + name}>
              <td>{camelCase(`${prefix} ${name}`)}</td>
              <td>{token}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export { StringTokens };
