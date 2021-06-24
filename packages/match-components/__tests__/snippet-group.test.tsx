import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from "jest-axe";
import * as React from "react";
import { withTheme } from "@twilio-labs/match-themes";
import { Snippet, SnippetGroup, SnippetLanguage } from "../src";

const SnippetGroupWithTheme = withTheme()(SnippetGroup);

const jsExample = `
console.log('Rose');
while(true) {
  console.log('is a rose');
}
`.trim();

const pythonExample = `
print('Rose)
while(true):
  print('is a rose')
`.trim();

describe("SnippetGroup", () => {
  test("select change", () => {
    render(
      <SnippetGroupWithTheme compact>
        <Snippet language={SnippetLanguage.JAVASCRIPT}>{jsExample}</Snippet>
        <Snippet language={SnippetLanguage.PYTHON}>{pythonExample}</Snippet>
      </SnippetGroupWithTheme>
    );
    userEvent.selectOptions(
      screen.getByRole("combobox"),
      screen.getAllByRole("option")[1]
    );
    expect(screen.getByLabelText(/python/i)).toBeVisible();
  });

  test("accessibility violations", async () => {
    const { container } = render(
      <SnippetGroupWithTheme label="Snippet Group">
        <Snippet
          githubLink="https://github.com/twilio-labs/match"
          language={SnippetLanguage.JAVASCRIPT}
          label="JS"
        >
          {jsExample}
        </Snippet>
        <Snippet
          githubLink="https://github.com/twilio-labs/match"
          language={SnippetLanguage.PYTHON}
        >
          {pythonExample}
        </Snippet>
      </SnippetGroupWithTheme>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
