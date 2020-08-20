/** @jsx jsx */
import { jsx } from "theme-ui";
import * as React from "react";
import { useConfig } from "docz";

interface SwatchTokensProps {
  tokens: [string, string][];
}

const SwatchTokens: React.FC<SwatchTokensProps> = ({ tokens }) => {
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
        {tokens.map(([name, color]) => (
          <tr key={name}>
            <td sx={styles.td}>{name}</td>
            <td sx={styles.td}>{color}</td>
            <td sx={styles.td}>
              <svg height="42" width="150" stroke="#E1E3EA" strokeWidth="1">
                <circle cx="40" cy="21" r="20" fill={color} />
              </svg>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export { SwatchTokens };
