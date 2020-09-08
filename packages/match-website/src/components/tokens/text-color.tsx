import * as React from "react";
import { ColorTranslator } from "colortranslator";
import { ColorToken } from "../../types/tokens";
import { hex, score } from "wcag-contrast";

interface TextColorTokensProps {
  tokens: ColorToken[];
  bgLight: string;
  bgDarkest: string;
  bgColor: string;
  bgWhite: string;
}

const TextColorTokens: React.FC<TextColorTokensProps> = ({
  tokens,
  bgLight,
  bgDarkest,
  bgColor,
  bgWhite,
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
            <td>{`text.${name}.color`}</td>
            <td>{ColorTranslator.toHEX(token.color)}</td>
            <td>
              <div style={{ display: "inline" }}>
                <div
                  style={{
                    color: `${token.color}`,
                    backgroundColor: `${
                      name.includes("inverse") ? bgColor : bgWhite
                    }`,
                    width: 56,
                    height: 40,
                    borderRadius: 3,
                    textAlign: "center",
                    paddingTop: 10,
                    paddingBottom: 10,
                    display: "inline-block",
                  }}
                >
                  {score(
                    hex(
                      ColorTranslator.toHEX(token.color),
                      name.includes("inverse")
                        ? ColorTranslator.toHEX(bgColor)
                        : ColorTranslator.toHEX(bgWhite)
                    )
                  )}
                </div>
                <div
                  style={{
                    color: `${token.color}`,
                    backgroundColor: `${
                      name.includes("inverse") ? bgDarkest : bgLight
                    }`,
                    width: 56,
                    height: 40,
                    borderRadius: 3,
                    textAlign: "center",
                    paddingTop: 10,
                    paddingBottom: 10,
                    marginLeft: "2px",
                    display: "inline-block",
                  }}
                >
                  {score(
                    hex(
                      ColorTranslator.toHEX(token.color),
                      name.includes("inverse")
                        ? ColorTranslator.toHEX(bgDarkest)
                        : ColorTranslator.toHEX(bgLight)
                    )
                  )}
                </div>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export { TextColorTokens };
