/** @jsx jsx */
import { jsx } from "theme-ui";
import * as React from "react";
import * as PropTypes from "prop-types";
import { useConfig } from "docz";
import { useTheme } from "@twilio-labs/match-themes";
import { MatchContext } from "../context/match";

interface SwatchTokensProps {
  include?: string[];
  exclude?: string[];
}

const SwatchTokens: React.FC<SwatchTokensProps> = ({ include, exclude }) => {
  const { swatch } = useTheme();
  const {
    themeConfig: { styles },
  } = useConfig();
  const {
    state: { filterText },
  } = React.useContext(MatchContext);

  const entries = React.useMemo(() => {
    return Object.entries(swatch)
      .filter(([key]) => !include || include.includes(key))
      .filter(([key]) => !exclude || !exclude.includes(key))
      .filter(
        ([key]) =>
          filterText.length === 0 ||
          `swatch.${key.toLocaleLowerCase()}`.includes(
            filterText.trim().toLowerCase()
          )
      );
  }, [filterText, include, exclude, swatch]);

  if (entries.length === 0) {
    return (
      <p sx={{ fontSize: "14px", fontStyle: "italic", textAlign: "center" }}>
        There are no swatch tokens matching the search query{" "}
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
          <th sx={styles.th}>Example</th>
        </tr>
      </thead>
      <tbody>
        {entries.map(([key, token]) => (
          <tr key={key}>
            <td sx={styles.td}>{`swatch.${key}.color`}</td>
            <td sx={styles.td}>{token.lowFidelityColor}</td>
            <td sx={styles.td}>
              <svg height="42" width="150" stroke="#E1E3EA" strokeWidth="1">
                <circle cx="40" cy="21" r="20" fill={token.color} />
              </svg>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

SwatchTokens.propTypes = {
  include: PropTypes.arrayOf(PropTypes.string.isRequired),
  exclude: PropTypes.arrayOf(PropTypes.string.isRequired),
};

export { SwatchTokens };
