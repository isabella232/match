/** @jsx jsx */
import { jsx } from "theme-ui";
import * as React from "react";
import { useConfig } from "docz";
import { BreakpointToken } from "../../types/tokens";

interface BreakpointTokensProps {
  tokens: BreakpointToken[];
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
          {tokens.map(([name, token]) => (
            <tr key={name}>
              <td sx={styles.td}>{`breakpoint.${name}.mediaQuery`}</td>
              <td sx={styles.td}>{token.mediaQuery}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export { BreakpointTokens };
