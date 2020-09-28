import * as React from "react";
import { GradientToken } from "../../types/tokens";
import { Color } from "@twilio-labs/match-tokens";
import { useTheme } from "@twilio-labs/match-themes";

interface GradientTokensProps {
  tokens: GradientToken[];
  prefix: string;
}

type GradientStop = {
  color: Color;
  position: number;
};

const GradientTokens: React.FC<GradientTokensProps> = ({ tokens, prefix }) => {
  const { swatch } = useTheme();
  const parsedTokens = React.useMemo(
    () =>
      tokens.map(([name, token]) => {
        const stops: GradientStop[] = [];
        const colorInfo: string[] = [];

        token.stops.forEach((stop) => {
          Object.entries(swatch).some(([tokenName, color]) => {
            //do this for each swatch and find corresponding color
            if (
              color.h == stop.color.h &&
              color.s == stop.color.s &&
              color.l == stop.color.l
            ) {
              stops.push({
                color: stop.color,
                position: stop.position,
              });
              colorInfo.push(
                (stop.color.a * 100)
                  .toFixed(3)
                  .replace(
                    /^([\d,]+)$|^([\d,]+)\.0*$|^([\d,]+\.\d*?)0*$/,
                    "$1$2$3"
                  ) +
                  "% " +
                  tokenName
              );
              return true;
            }
          });
        });

        //Diez doesnt have a good way to get the angle of the gradient so parse value to get angle
        const matchedRegex = token.linearGradient.match(
          /linear-gradient\(([\s\w]+),/
        );
        const angle = matchedRegex ? matchedRegex[1] : "0deg";
        const value = angle + ", " + colorInfo.join(", ");

        return {
          value: value, // ths should end up being the printed value
          angle: angle,
          stops: stops,
          name: name,
        };
      }),
    [tokens, swatch]
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
            {console.log(token.stops)}
            <td>{`${prefix}.${token.name}.linearGradient`}</td>
            <td>{token.value}</td>
            <td>
              <svg width="205" height="96">
                <defs>
                  <linearGradient id={token.name}>
                    {token.stops.map((stop) => (
                      <stop
                        key={
                          stop.position + "-" + token.name + "-" + stop.color.a
                        }
                        offset={stop.position}
                        stopColor={stop.color.color}
                      />
                    ))}
                  </linearGradient>
                </defs>

                <rect width="205" height="96" fill={`url(#${token.name})`} />
              </svg>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export { GradientTokens };
