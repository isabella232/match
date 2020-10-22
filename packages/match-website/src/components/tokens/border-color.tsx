import * as React from "react";
import { ColorTranslator } from "colortranslator";
import { useTheme } from "@twilio-labs/match-themes";
import { ColorToken } from "../../types/tokens";
import styles from "./styles.module.css";

interface BorderColorTokensProps {
  tokens: ColorToken[];
  prefix: string;
}

const BorderColorTokens: React.FC<BorderColorTokensProps> = ({
  tokens,
  prefix,
}) => {
  const { swatch } = useTheme();
  const parsedTokens = React.useMemo(
    () =>
      tokens.map(([name, token]) => {
        const alias = Object.entries(swatch).find(
          ([_name, aliased]: ColorToken) => token.color === aliased.color
        );
        return {
          name: `${prefix}.${name}.color`,
          value: alias ? alias[0] : ColorTranslator.toHEX(token.color),
          borderColor: token.color,
        };
      }),
    [tokens, swatch, prefix]
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
          <tr key={name}>
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
