import * as React from "react";
import styles from "./token-table.module.css";
import { CopyMenu } from "./copy-menu";
import { Example } from "./examples";
import clsx from "clsx";

export type MultiValueTokenItem = [
  name: string,
  value: {
    px: string;
    rem: string;
  }
];

export type SimpleValueTokenItem = [name: string, value: string | number];

export type SimpleValueTokenTableProps = {
  tokens: SimpleValueTokenItem[];
  exampleType?: "color" | "textColor" | "shadow" | "border";
};

export type MultiValueTokenTableProps = {
  tokens: MultiValueTokenItem[];
  exampleType?: "fontSize" | "gradient" | "borderWidth" | "spacing";
};

export type TokenTableProps = {
  prefix?: string;
} & (SimpleValueTokenTableProps | MultiValueTokenTableProps);

function isMultiValueTokenItem(
  tokenItem: MultiValueTokenItem | SimpleValueTokenItem
): tokenItem is MultiValueTokenItem {
  return ["string", "number"].includes(typeof tokenItem);
}

const TokenTable: React.FC<TokenTableProps> = ({
  tokens,
  prefix,
  exampleType,
}) => {
  prefix = prefix !== undefined ? `${prefix}.` : "";
  const units = isMultiValueTokenItem(tokens[0]) ? ["px", "rem"] : undefined;

  const hasExamples = exampleType !== undefined;

  return (
    <table className={styles.tokenTable}>
      <thead>
        <tr>
          <th>Token</th>
          {units ? (
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
          ) : (
            <th colSpan={!hasExamples ? 2 : undefined}>Value</th>
          )}
          {hasExamples && <th colSpan={2}>Example</th>}
        </tr>
      </thead>
      <tbody>
        {(tokens as Array<SimpleValueTokenItem | MultiValueTokenItem>).map(
          (token) => {
            const [name, value] = token;
            return (
              <tr key={`${prefix}${name}`}>
                <td>{`${prefix}${name}`}</td>
                {!isMultiValueTokenItem(token) ? (
                  <td
                    className={clsx({
                      [styles.noBorderRight]: !hasExamples,
                    })}
                  >
                    {token[1]}
                  </td>
                ) : (
                  Object.values(token[1]).map((val, idx) => (
                    <td
                      key={`${prefix}${name}.value.${units![idx]}`}
                      className={clsx({
                        [styles.noBorderRight]:
                          !hasExamples &&
                          idx === Object.values(value).length - 1,
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
          }
        )}
      </tbody>
    </table>
  );
};

export { TokenTable };
