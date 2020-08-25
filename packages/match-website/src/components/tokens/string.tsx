/** @jsx jsx */
import { jsx } from "theme-ui";
import * as React from "react";
import { useConfig } from "docz";
import { StringToken } from "../../types/tokens";

interface BreakpointTokensProps {
  tokens: StringToken[];
  prefix: string;
}

const StringTokens: React.FC<BreakpointTokensProps> = ({ tokens, prefix }) => {
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
              <td sx={styles.td}>{`${prefix}.${name}`}</td>
              <td sx={styles.td}>{token}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export { StringTokens };
