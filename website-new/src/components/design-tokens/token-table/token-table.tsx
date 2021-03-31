import * as React from "react";
import { VisuallyHidden } from "reakit";
import { tokenTable } from "./token-table.module.css";
import { Example } from "../examples";
import { remToPx } from "../../../utils";
import { Token } from "../../../types";
import { Copy } from "./copy";

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
      // With added spaces between commas
      return token.value.slice(16, -1).replace(/(,)(\d)/g, `$1 $2`);
    case "shadows":
      return token.value.replace(/(,)(\d)/g, `$1 $2`);
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
          const { group, name, value } = token;
          return (
            <tr key={`${group}.${name}`}>
              <td>
                <Copy value={`${group}.${name}`}>
                  <var>
                    {group}
                    <wbr />
                    {`.${name}`}
                  </var>
                </Copy>
              </td>
              <td>
                <Copy value={value}>{formatValue(token)}</Copy>
              </td>
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
