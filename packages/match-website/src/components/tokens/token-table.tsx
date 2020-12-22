import * as React from "react";
import { Copyable } from "../copyable";
import styles from "./token-table.module.css";
import { CopyMenu } from "./copy-menu";

export type TokenItem = {
  name: string;
  value:
    | string
    | {
        [unit: string]: string;
      };
  example?: any;
};

export type TokenTableProps = {
  tokens: TokenItem[];
  prefix?: string;
};

const TokenTable: React.FC<TokenTableProps> = ({ tokens, prefix }) => {
  prefix = prefix !== undefined ? `${prefix}.` : "";
  // eslint-disable-next-line unicorn/no-reduce
  const units = tokens.reduce((unitList, tokenItem) => {
    if (typeof tokenItem.value !== "string") {
      for (const unitName of Object.keys(tokenItem.value)) {
        if (!unitList.includes(unitName)) {
          unitList.push(unitName);
        }
      }
    }
    return unitList;
  }, [] as string[]);

  const hasExamples = tokens.some((token) => token.example !== undefined);

  return (
    <table className={styles.tokenTable}>
      <thead>
        <tr>
          <th>Token</th>
          {units.length === 0 ? (
            <th>Value</th>
          ) : (
            units.map((unitName) => <th key={unitName}>Value ({unitName})</th>)
          )}
          {hasExamples && <th>Example</th>}
          <th />
        </tr>
      </thead>
      <tbody>
        {tokens.map(({ name, value, example }) => (
          <tr key={`${prefix}${name}`}>
            <td>
              <Copyable>{`${prefix}${name}`}</Copyable>
            </td>
            {["string", "number"].includes(typeof value) ? (
              <td>
                <Copyable>{value}</Copyable>
              </td>
            ) : (
              Object.values(value).map((val, idx) => (
                <td key={`${prefix}${name}.value.${units[idx]}`}>
                  <Copyable>{val}</Copyable>
                </td>
              ))
            )}
            {example !== undefined && <td>{example}</td>}
            <td>
              <CopyMenu name={`${prefix}${name}`} value={value}></CopyMenu>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export { TokenTable };
