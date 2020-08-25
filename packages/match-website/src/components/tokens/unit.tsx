/** @jsx jsx */
import { jsx } from "theme-ui";
import * as React from "react";
import { useConfig } from "docz";
import { UnitToken } from "../../types/tokens";

interface BreakpointTokensProps {
  tokens: UnitToken[];
}

const UnitTokens: React.FC<BreakpointTokensProps> = ({ tokens }) => {
  const {
    themeConfig: { styles },
  } = useConfig();

  return (
    <div>
      <table sx={styles.table}>
        <thead>
          <tr>
            <th sx={styles.th}>Token</th>
            <th sx={styles.th}>Value (px)</th>
            <th sx={styles.th}>Value (rem)</th>
          </tr>
        </thead>
        <tbody>
          {tokens.map(([name, token]) => (
            <tr key={name}>
              <td sx={styles.td}>{`fontSize.${name}.rem`}</td>
              <td sx={styles.td}>{token.px}</td>
              <td sx={styles.td}>{token.rem}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export { UnitTokens };
