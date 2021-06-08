import { render } from "@testing-library/react";
import { axe } from "jest-axe";
import * as React from "react";
import { withTheme } from "@twilio-labs/match-themes";
import { Snippet, SnippetGroup, SnippetLanguage } from "../src";

const SnippetWithTheme = withTheme()(Snippet);
const SnippetGroupWithTheme = withTheme()(SnippetGroup);

const jsExample = `console.log('Rose');
while(true) {
  console.log('is a rose');
}`;

const pythonExample = `print('Rose)
while(true):
  print('is a rose')`;

describe("Snippet", () => {
  test("snippet accessibility violations", async () => {
    const { container } = render(
      <SnippetWithTheme language={SnippetLanguage.JAVASCRIPT}>
        {jsExample}
      </SnippetWithTheme>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  test("snippet group accessibility violations", async () => {
    const { container } = render(
      <SnippetGroupWithTheme>
        <Snippet language={SnippetLanguage.JAVASCRIPT}>{jsExample}</Snippet>
        <Snippet language={SnippetLanguage.PYTHON}>{pythonExample}</Snippet>
      </SnippetGroupWithTheme>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
