import * as React from "react";
import styles from "./token-table.module.css";
import { CopyMenu } from "./copy-menu";
import { Example } from "./examples";
import clsx from "clsx";
import { Token } from "../../types";

export type TokenTableProps = {
  tokens: Token[];
  prefix?: string;
  exampleType?:
    | "color"
    | "fontSize"
    | "textColor"
    | "gradient"
    | "shadow"
    | "border"
    | "borderWidth"
    | "spacing";
};

/**
 * Given a list of tokens whose value is an object in the format `{ [unitName: string]: string }`,
 * returns the units found for that token list. If the values are simple, returns an empty array.
 *  @example <caption>Value has multiple units</caption>
 *           // returns ['px','rem']
 *           getUnitsFromTokenList([{
 *             name: 'test',
 *             value: {
 *               'px': 32,
 *               'rem': 1.25
 *             }
 *           }]);
 *  @example <caption>Simple value</caption>
 *           // returns undefined
 *           getUnitsFromTokenList([{
 *              name: 'simple',
 *              value: 10
 *           }]);
 */
function getUnitsFromTokenList(tokens: Token[]): string[] | undefined {
  if (tokens.length === 0) return;
  const [, value] = tokens[0];
  if (typeof value !== "object") return;
  return Object.keys(value);
}

const TokenTable: React.FC<TokenTableProps> = ({
  tokens,
  prefix,
  exampleType,
}) => {
  prefix = prefix !== undefined ? `${prefix}.` : "";
  const units = getUnitsFromTokenList(tokens);

  const hasExamples = exampleType !== undefined;

  return (
    <table className={styles.tokenTable}>
      <thead>
        <tr>
          <th>Token</th>
          {!units ? (
            <th colSpan={!hasExamples ? 2 : undefined}>Value</th>
          ) : (
            units.map((unitName, idx) => (
              <th
                key={unitName}
                colSpan={
                  !hasExamples && idx === units.length - 1 ? 2 : undefined
                }
              >
                Value ({unitName})
              </th>
            ))
          )}
          {hasExamples && <th colSpan={2}>Example</th>}
        </tr>
      </thead>
      <tbody>
        {tokens.map((token) => {
          const [name, value] = token;
          return (
            <tr key={`${prefix}${name}`}>
              <td>{`${prefix}${name}`}</td>
              {!units ? (
                <td
                  className={clsx({
                    [styles.noBorderRight]: !hasExamples,
                  })}
                >
                  {value}
                </td>
              ) : (
                Object.values(value).map((val, idx) => (
                  <td
                    key={`${prefix}${name}.value.${units[idx]}`}
                    className={clsx({
                      [styles.noBorderRight]:
                        !hasExamples && idx === Object.values(value).length - 1,
                    })}
                  >
                    {val}
                  </td>
                ))
              )}
              {hasExamples && exampleType && (
                <td className={styles.noBorderRight}>
                  <Example token={token} type={exampleType} />
                </td>
              )}
              <td className={styles.noBorderLeft}>
                <CopyMenu name={`${prefix}${name}`} value={value}></CopyMenu>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export { TokenTable };
