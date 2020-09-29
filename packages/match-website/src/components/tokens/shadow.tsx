import * as React from "react";
import { ShadowToken } from "../../types/tokens";
import { ColorTranslator } from "colortranslator";

interface SwatchTokensProps {
  tokens: ShadowToken[];
  prefix: string;
}

const ShadowTokens: React.FC<SwatchTokensProps> = ({ tokens, prefix }) => {
  const parsedTokens = React.useMemo(
    () =>
      tokens.map(([name, token]) => {
        const singleShadowValue = token.shadows.map((shadow) => {
          return (
            shadow.offset.x +
            "px " +
            shadow.offset.y +
            "px " +
            shadow.radius +
            "px " +
            ColorTranslator.toHEXA(shadow.color.color)
          );
        });
        console.log(singleShadowValue);

        return {
          name: name,
          shadow: token,
          value: singleShadowValue.join(", "),
          cssStyle: {
            backgroundColor: "#ffffff",
            width: "193px",
            height: "96px",
            boxShadow: token.boxShadow,
          },
        };
      }),
    [tokens]
  );
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
        {parsedTokens.map((token) => (
          <tr key={token.name}>
            <td>{`${prefix}.${token.name}.boxShadow`}</td>
            <td>{token.value}</td>
            <td>
              <div style={token.cssStyle}></div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export { ShadowTokens };
