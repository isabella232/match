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
                        ? backgrounds[0][1].color
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
                        ? ColorTranslator.toHEX(backgrounds[0][1].color)
                        : "#ffffff"
                    )
                  )}
                </div>
                <div
                  sx={{
                    color: `${token.color}`,
                    backgroundColor: `${
                      name.includes("inverse")
                        ? backgrounds[2][1].color
                        : backgrounds[1][1].color
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
                        ? ColorTranslator.toHEX(backgrounds[2][1].color)
                        : ColorTranslator.toHEX(backgrounds[1][1].color)
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
