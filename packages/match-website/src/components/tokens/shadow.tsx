import * as React from "react";
import { ShadowToken } from "../../types/tokens";
import { ColorTranslator } from "colortranslator";
import styles from "./styles.module.css";

interface SwatchTokensProps {
  tokens: ShadowToken[];
  prefix: string;
  backgroundColor: string;
}

const ShadowTokens: React.FC<SwatchTokensProps> = ({
  tokens,
  prefix,
  backgroundColor,
}) => {
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

        //the inverse example should appear on a dark background
        const backgroundStyle =
          name === "inverse" ? { background: backgroundColor } : {};

        return {
          name: name,
          value: singleShadowValue.join(", "),
          cardStyle: {
            boxShadow: token.boxShadow,
          },
          backgroundStyle: backgroundStyle,
        };
      }),
    [tokens, backgroundColor]
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
            <td style={token.backgroundStyle}>
              <div
                style={token.cardStyle}
                className={styles.rectangleExample}
              ></div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export { ShadowTokens };
