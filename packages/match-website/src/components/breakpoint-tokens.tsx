/** @jsx jsx */
import { jsx } from "theme-ui";
import * as React from "react";
import { useConfig } from "docz";
import { useTheme } from "@twilio-labs/match-themes";
import { MatchContext } from "../context/match";

const BreakpointTokens: React.FC = () => {
  const matchTheme = useTheme();
  const {
    themeConfig: { styles },
  } = useConfig();
  const {
    state: { filterText, theme },
  } = React.useContext(MatchContext);

  const entries = React.useMemo(() => {
    if (filterText.length === 0) return Object.entries(matchTheme.breakpoint);
    return Object.entries(matchTheme.breakpoint).filter(([key]) =>
      `breakpoint.${key.toLocaleLowerCase()}`.includes(
        filterText.trim().toLowerCase()
      )
    );
  }, [filterText, theme]);

  if (entries.length === 0) {
    return (
      <p sx={{ fontSize: "14px", fontStyle: "italic", textAlign: "center" }}>
        There are no breakpoint tokens matching the search query{" "}
        {`"${filterText.trim()}"`}
      </p>
    );
  }

  return (
    <table sx={styles.table}>
      <thead>
        <tr>
          <th sx={styles.th}>Token</th>
          <th sx={styles.th}>Value</th>
        </tr>
      </thead>
      <tbody>
        {entries.map(([key, val]) => (
          <tr key={key}>
            <td sx={styles.td}>{`breakpoint.${key}`}</td>
            <td sx={styles.td}>{val.mediaQuery}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export { BreakpointTokens };
