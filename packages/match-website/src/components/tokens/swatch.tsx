import * as React from "react";
import { ColorTranslator } from "colortranslator";
import { ColorToken } from "../../types/tokens";

interface SwatchTokensProps {
  tokens: ColorToken[];
}

const SwatchTokens: React.FC<SwatchTokensProps> = ({ tokens }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Token</th>
          <th>Value</th>
          <th>Example</th>
        </tr>
      </thead>
      <tbody>
        {tokens.map(([name, token]) => (
          <tr key={name}>
            <td>{`swatch.${name}.color`}</td>
            <td>{ColorTranslator.toHEX(token.color)}</td>
            <td>
              <svg height="42" width="150" stroke="#E1E3EA" strokeWidth="1">
                <circle cx="40" cy="21" r="20" fill={token.color} />
              </svg>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export { SwatchTokens };
