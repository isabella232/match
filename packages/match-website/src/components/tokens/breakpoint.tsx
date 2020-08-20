/** @jsx jsx */
import { jsx } from "theme-ui";
import * as React from "react";
import { useConfig } from "docz";

interface BreakpointTokensProps {
  tokens: [string, string][];
}

const BreakpointTokens: React.FC<BreakpointTokensProps> = ({ tokens }) => {
  const {
    themeConfig: { styles },
  } = useConfig();

  return (
    <div>
      <table sx={styles.table}>
        <thead>
          <tr>
            <th sx={styles.th}>Token</th>
            <th sx={styles.th}>Value</th>
          </tr>
        </thead>
        <tbody>
          {tokens.map(([name, mediaQuery]) => (
            <tr key={name}>
              <td sx={styles.td}>{name}</td>
              <td sx={styles.td}>{mediaQuery}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export { BreakpointTokens };
