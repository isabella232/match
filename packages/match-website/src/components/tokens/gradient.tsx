import * as React from "react";
import { ColorToken, GradientToken } from "../../types/tokens";

function parseToken(token) {
  const color1 = token.stops[0].color;
  const offset1 = token.stops[0].position;
  const color2 = token.stops[1].color;
  const offset2 = token.stops[1].position;

  //Diez doesnt have a good way to get the angle of the gradient so this splits the token value based on , and (
  //The array that is generated is ['linear-gradient', angle, ...] so angle is the 1st element
  const angle = token.linearGradient.split(/[(,]/)[1];
  return {
    angle: angle,
    color1: color1,
    offset1: offset1,
    color2: color2,
    offset2: offset2,
  };
}

function getColorTokenName(color, gradientColors) {
  const colorToken = gradientColors.find(
    (gradientColor) =>
      gradientColor[1].h == color.h &&
      gradientColor[1].s == color.s &&
      gradientColor[1].l == color.l
  );
  if (colorToken) return colorToken[0];
  return "";
}

function prettyPrint(token, gradientColors) {
  if (token == undefined) return "";
  const gradientValues = parseToken(token);
  const color1Token = getColorTokenName(gradientValues.color1, gradientColors);
  const color1Percent = (gradientValues.color1.a * 100)
    .toFixed(3)
    .replace(/^([\d,]+)$|^([\d,]+)\.0*$|^([\d,]+\.\d*?)0*$/, "$1$2$3");
  const color2Token = getColorTokenName(gradientValues.color2, gradientColors);
  const color2Percent = (gradientValues.color2.a * 100)
    .toFixed(3)
    .replace(/^([\d,]+)$|^([\d,]+)\.0*$|^([\d,]+\.\d*?)0*$/, "$1$2$3");
  return (
    gradientValues.angle +
    ", \n" +
    color1Percent +
    "% " +
    color1Token +
    " to " +
    color2Percent +
    "% " +
    color2Token
  );
}

interface GradientTokensProps {
  tokens: GradientToken[];
  gradientColors: ColorToken[];
  prefix: string;
}

const GradientTokens: React.FC<GradientTokensProps> = ({
  tokens,
  gradientColors,
  prefix,
}) => {
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
            <td>{`${prefix}.${name}\n.linearGradient`}</td>
            <td>{prettyPrint(token, gradientColors)}</td>
            <td>
              <svg width="205" height="96">
                <defs>
                  <linearGradient id={name}>
                    <stop
                      offset={parseToken(token).offset1}
                      stopColor={parseToken(token).color1.color}
                    />
                    <stop
                      offset={parseToken(token).offset2}
                      stopColor={parseToken(token).color2.color}
                    />
                  </linearGradient>
                </defs>

                <rect width="205" height="96" fill={`url(#${name})`} />
              </svg>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export { GradientTokens };
