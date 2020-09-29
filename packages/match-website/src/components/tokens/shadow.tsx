import * as React from "react";
import { ShadowToken } from "../../types/tokens";
import { useTheme } from "@twilio-labs/match-themes";

interface SwatchTokensProps {
  tokens: ShadowToken[];
  prefix: string;
}

const ShadowTokens: React.FC<SwatchTokensProps> = ({ tokens, prefix }) => {
  const { swatch } = useTheme();
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
            <td>{`${prefix}.${name}.boxShadow`}</td>
            {console.log(token)}
            <td>{token.boxShadow}</td>
            <td></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export { ShadowTokens };
