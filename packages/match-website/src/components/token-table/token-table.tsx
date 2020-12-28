import * as React from "react";
import { Copyable } from "./copyable";
import styles from "./token-table.module.css";
import exampleStyles from "./examples/examples.module.css";
import { CopyMenu } from "./copy-menu";
import { Shadow, TextColor } from "./examples";
import { useTheme } from "@twilio-labs/match-themes";
import clsx from "clsx";

export type TokenItem = [
  name: string,
  value:
    | string
    | {
        [unit: string]: string;
      }
];

export type TokenTableProps = {
  tokens: TokenItem[];
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

const TokenTable: React.FC<TokenTableProps> = ({
  tokens,
  prefix,
  exampleType,
}) => {
  const { colors } = useTheme();
  prefix = prefix !== undefined ? `${prefix}.` : "";
  // eslint-disable-next-line unicorn/no-reduce
  const units = tokens.reduce((unitList, [_name, value]) => {
    if (typeof value !== "string") {
      for (const unitName of Object.keys(value)) {
        if (!unitList.includes(unitName)) {
          unitList.push(unitName);
        }
      }
    }
    return unitList;
  }, [] as string[]);

  const hasExamples = exampleType !== undefined;

  const generateExample = (token: TokenItem) => {
    const [, value] = token;
    let example: any;
    switch (exampleType) {
      case "color":
        example = (
          <svg height="42" width="42" stroke="#E1E3EA" strokeWidth="1">
            <circle cx="21" cy="21" r="20" fill={value as string} />
          </svg>
        );
        break;
      case "fontSize":
        example = <span style={{ fontSize: value["rem"] as string }}>Ab</span>;
        break;
      case "textColor":
        example = <TextColor token={token} />;
        break;
      case "gradient":
        example = (
          <div
            style={{ background: `linear-gradient(${value as string})` }}
            className={exampleStyles.rectangleExample}
          ></div>
        );
        break;
      case "shadow":
        example = <Shadow token={token} />;
        break;
      case "border":
        example = (
          <div
            className={exampleStyles.borderExample}
            style={{
              borderColor: colors[value as string] ?? (value as string),
            }}
          />
        );
        break;
      case "borderWidth":
        example = (
          <div
            className={exampleStyles.borderExample}
            style={{ borderWidth: value["rem"] }}
          />
        );
        break;
      case "spacing":
        example = (
          <div
            className={exampleStyles.spacingExample}
            style={{ width: value["rem"], height: value["rem"] }}
          />
        );
        break;
    }
    return example;
  };

  return (
    <table className={styles.tokenTable}>
      <thead>
        <tr>
          <th>Token</th>
          {units.length === 0 ? (
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
              <td>
                <Copyable>{`${prefix}${name}`}</Copyable>
              </td>
              {["string", "number"].includes(typeof value) ? (
                <td
                  className={clsx({
                    [styles.noBorderRight]: !hasExamples,
                  })}
                >
                  <Copyable>{value}</Copyable>
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
                    <Copyable>{val}</Copyable>
                  </td>
                ))
              )}
              {hasExamples && (
                <td className={styles.noBorderRight}>
                  {generateExample(token)}
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
