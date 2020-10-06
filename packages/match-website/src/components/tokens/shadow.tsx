import * as React from "react";
import { ShadowToken } from "../../types/tokens";
import { ColorTranslator } from "colortranslator";
import { useTheme } from "@twilio-labs/match-themes";
import styles from "./styles.module.css";

interface SwatchTokensProps {
  tokens: ShadowToken[];
  prefix: string;
}

const ShadowTokens: React.FC<SwatchTokensProps> = ({ tokens, prefix }) => {
  const { background } = useTheme();
  const parsedTokens = React.useMemo(
    () =>
      tokens.map(([name, token]) => {
        //   const singleShadowValue = token.shadows.map((shadow) => {
        //     return (
        //       shadow.offset.x +
        //       "px " +
        //       shadow.offset.y +
        //       "px " +
        //       shadow.radius +
        //       "px " +
        //       ColorTranslator.toHEXA(shadow.color.color)
        //     );
        //   });

        //the inverse example should appear on a dark background
        const backgroundStyle =
          name === "inverse" ? { background: background.blue.color } : {};

        return {
          name: name,
          value:
            token.offset.x +
            "px " +
            token.offset.y +
            "px " +
            token.radius +
            "px " +
            ColorTranslator.toHEXA(token.color.color),
          cardStyle: {
            boxShadow: token.boxShadow,
          },
          backgroundStyle: backgroundStyle,
        };
      }),
    [tokens, background]
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
