import * as React from "react";
import { Token } from "../../types";

interface MediaQueryTokensProps {
  tokens: Token[];
}

const MediaQueryTokens: React.FC<MediaQueryTokensProps> = ({ tokens }) => {
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
            <tr key={`mediaQueries.${name}`}>
              <td>{`mediaQueries.${name}`}</td>
              <td>{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export { MediaQueryTokens };
