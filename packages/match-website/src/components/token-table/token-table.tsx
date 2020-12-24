import * as React from "react";
import { Copyable } from "./copyable";
import styles from "./token-table.module.css";
import exampleStyles from "./examples/examples.module.css";
import { CopyMenu } from "./copy-menu";
import { Shadow, TextColor } from "./examples";
import { useTheme } from "@twilio-labs/match-themes";

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

  const hasExamples =
    exampleType !== undefined ||
    tokens.some((token) => token.example !== undefined);

  const generateExample = (token: TokenItem) => {
    let example: any;
    switch (exampleType) {
      case "color":
        example = (
          <svg height="42" width="42" stroke="#E1E3EA" strokeWidth="1">
            <circle cx="21" cy="21" r="20" fill={token.value as string} />
          </svg>
        );
        break;
      case "fontSize":
        example = <span style={{ fontSize: token["rem"] as string }}>Ab</span>;
        break;
      case "textColor":
        example = <TextColor token={token} />;
        break;
      case "gradient":
        example = (
          <div
            style={{ background: `linear-gradient(${token.value as string})` }}
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
              borderColor:
                colors[token.value as string] ?? (token.value as string),
            }}
          />
        );
        break;
      case "borderWidth":
        example = (
          <div
            className={exampleStyles.borderExample}
            style={{ borderWidth: token.value["rem"] }}
          />
        );
        break;
      case "spacing":
        example = (
          <div
            className={exampleStyles.spacingExample}
            style={{ width: token.value["rem"], height: token.value["rem"] }}
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
            <th>Value</th>
          ) : (
            units.map((unitName) => <th key={unitName}>Value ({unitName})</th>)
          )}
          {hasExamples && <th>Example</th>}
          <th />
        </tr>
      </thead>
      <tbody>
        {tokens.map((token) => (
          <tr key={`${prefix}${token.name}`}>
            <td>
              <Copyable>{`${prefix}${token.name}`}</Copyable>
            </td>
            {["string", "number"].includes(typeof token.value) ? (
              <td>
                <Copyable>{token.value}</Copyable>
              </td>
            ) : (
              Object.values(token.value).map((val, idx) => (
                <td key={`${prefix}${token.name}.value.${units[idx]}`}>
                  <Copyable>{val}</Copyable>
                </td>
              ))
            )}
            {hasExamples &&
              (token.example !== undefined ? (
                <td>{token.example}</td>
              ) : (
                <td>{generateExample(token)}</td>
              ))}
            <td>
              <CopyMenu
                name={`${prefix}${token.name}`}
                value={token.value}
              ></CopyMenu>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export { TokenTable };
