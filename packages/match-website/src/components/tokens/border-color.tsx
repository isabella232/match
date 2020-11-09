import * as React from "react";
import { useTheme } from "@twilio-labs/match-themes";
import { Token } from "../../types";
import styles from "./styles.module.css";

interface BorderColorTokensProps {
  tokens: Token[];
  prefix: string;
}

const BorderColorTokens: React.FC<BorderColorTokensProps> = ({
  tokens,
  prefix,
}) => {
  const { colors } = useTheme();
  const parsedTokens = React.useMemo(
    () =>
      tokens.map(([name, value]) => {
        const alias = Object.entries(colors).find(
          ([_name, aliased]: Token) => value === aliased
        );
        return {
          name: `${prefix}.${name}`,
          value: alias ? alias[0] : value,
          borderColor: value,
        };
      }),
    [tokens, colors, prefix]
  );
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
        {parsedTokens.map(({ name, value, borderColor }) => (
          <tr key={prefix + name}>
            <td>{name}</td>
            <td>{value}</td>
            <td>
              <div className={styles.borderExample} style={{ borderColor }} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export { BorderColorTokens };
