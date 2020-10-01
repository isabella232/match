import * as React from "react";
import { GradientToken } from "../../types/tokens";
import { Color } from "@twilio-labs/match-tokens";
import { ColorTranslator } from "colortranslator";
import styles from "./styles.module.css";

interface GradientTokensProps {
  tokens: GradientToken[];
  prefix: string;
}

type GradientStop = {
  color: Color;
  hex: string;
  position: number;
};

const GradientTokens: React.FC<GradientTokensProps> = ({ tokens, prefix }) => {
  const parsedTokens = React.useMemo(
    () =>
      tokens.map(([name, token]) => {
        const stops: GradientStop[] = token.stops.map(
          ({ position, color }) => ({
            hex: ColorTranslator.toHEXA(color.color),
            position,
            color,
          })
        );

        // Diez doesnt have a good way to get the angle of the gradient so parse value to get angle
        const matchedRegex = token.linearGradient.match(
          /linear-gradient\(([\s\w]+),/
        );
        const angle = matchedRegex ? matchedRegex[1] : "180deg";
        const value =
          angle +
          ", " +
          stops
            .map((stop) => `${stop.hex} ${Math.round(stop.position * 100)}%`)
            .join(", ");

        return {
          value: value,
          name: name,
          style: {
            background: token.linearGradient,
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
            <td>{`${prefix}.${token.name}.linearGradient`}</td>
            <td>{token.value}</td>
            <td>
              <div
                style={token.style}
                className={styles.rectangleExample}
              ></div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export { GradientTokens };