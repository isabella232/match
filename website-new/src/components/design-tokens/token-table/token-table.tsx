import * as React from "react";
import { VisuallyHidden } from "reakit";
import { tokenTable } from "./token-table.module.css";
import { Example } from "../examples";
import { remToPx } from "../../../utils";
import { Token } from "../../../types";

export type TokenTableProps = {
  tokens: Token[];
};

const formatValue = (token: Token): React.ReactNode => {
  switch (token.group) {
    case "fontSizes":
    case "borderWidths":
    case "space":
    case "radii":
    case "iconSizes":
      return (
        <>
          {remToPx(token.value)}
          <br />
          {token.value}
        </>
      );
    case "gradients":
      // Return the contents of linear-gradient(...)
      return token.value.slice(16, -1);
    default:
      return token.value;
  }
};

export const TokenTable: React.FC<TokenTableProps> = ({ tokens }) => {
  const hasExamples = [
    "colors",
    "backgroundColors",
    "gradients",
    "textColors",
    "fontFamilies",
    "fontSizes",
    "fontWeights",
    "shadows",
    "borderColors",
    "borderWidths",
    "radii",
    "space",
    "iconSizes",
  ].includes(tokens[0].group);

  return (
    <table className={tokenTable}>
      <thead>
        <tr>
          <th>Token</th>
          <th>Value</th>
          {hasExamples && (
            <th>
              <VisuallyHidden>Example</VisuallyHidden>
            </th>
          )}
        </tr>
      </thead>
      <tbody>
        {tokens.map((token) => {
          const { group, name } = token;
          return (
            <tr key={`${group}.${name}`}>
              <td>
                <var>{`${group}.${name}`}</var>
              </td>
              <td>{formatValue(token)}</td>
              {hasExamples && (
                <td>
                  <Example token={token} />
                </td>
              )}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
