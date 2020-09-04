/** @jsx jsx */
import { jsx } from "theme-ui";
import * as React from "react";
import { useConfig } from "docz";
import { ColorTranslator } from "colortranslator";
import { ColorToken } from "../../types/tokens";
import { hex, score } from "wcag-contrast";

interface TextColorTokensProps {
  tokens: ColorToken[];
  backgrounds: ColorToken[];
}

const TextColorTokens: React.FC<TextColorTokensProps> = ({
  tokens,
  backgrounds,
}) => {
  const {
    themeConfig: { styles },
  } = useConfig();

  //create a default object with background colors
  const backgroundColors = {
    blue: "#ffffff",
    light: "#ffffff",
    darkest: "#ffffff",
  };
  //map passed in background colors to background object so code is less ambiguous
  backgrounds.forEach(
    (colorData) => (backgroundColors[colorData[0]] = colorData[1].color)
  );

  return (
    <table sx={styles.table}>
      <thead>
        <tr>
          <th sx={styles.th}>Token</th>
          <th sx={styles.th}>Value</th>
          <th sx={styles.th}>Example</th>
        </tr>
      </thead>
      <tbody>
        {tokens.map(([name, token]) => (
          <tr key={name}>
            <td sx={styles.td}>{`text.${name}.color`}</td>
            <td sx={styles.td}>{ColorTranslator.toHEX(token.color)}</td>
            <td sx={styles.td}>
              <div sx={{ display: "inline" }}>
                <div
                  sx={{
                    color: `${token.color}`,
                    backgroundColor: `${
                      name.includes("inverse")
                        ? backgroundColors.blue
                        : "#ffffff"
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
                        ? ColorTranslator.toHEX(backgroundColors.blue)
                        : "#ffffff"
                    )
                  )}
                </div>
                <div
                  sx={{
                    color: `${token.color}`,
                    backgroundColor: `${
                      name.includes("inverse")
                        ? backgroundColors.darkest
                        : backgroundColors.light
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
                        ? ColorTranslator.toHEX(backgroundColors.darkest)
                        : ColorTranslator.toHEX(backgroundColors.light)
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
