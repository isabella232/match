import { screen, render, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from "jest-axe";
import * as React from "react";
import { withTheme } from "@twilio-labs/match-themes";
import { Snippet, SnippetLanguage } from "../src";

const SnippetWithTheme = withTheme()(Snippet);

const shellExample = `$ echo "The woods are lovely, dark and deep, But I have promises to keep, and miles to go before I sleep."`;

const jsExample = `
console.log('Rose');
while(true) {
  console.log('is a rose');
}
`.trim();

describe("Snippet", () => {
  test("horizontal scroll", async () => {
    render(
      <SnippetWithTheme language={SnippetLanguage.SHELL}>
        {shellExample}
      </SnippetWithTheme>
    );
    expect(screen.getByTestId("scrollable").parentElement).toHaveAttribute(
      "data-scroll-x",
      "0"
    );
    await fireEvent.scroll(screen.getByTestId("scrollable"), {
      target: { scrollX: 100 },
    });
  });

  test("copy to clipboard", async () => {
    const clipboard = { ...navigator.clipboard };
    const writeText = jest.fn(() => Promise.resolve());
    Object.assign(navigator, {
      clipboard: {
        writeText,
      },
    });
    render(
      <SnippetWithTheme language={SnippetLanguage.JAVASCRIPT}>
        {jsExample}
      </SnippetWithTheme>
    );
    fireEvent.click(screen.getByLabelText(/copy to clipboard/i));
    await screen.findByText(/copied/i);
    expect(writeText).toHaveBeenCalledWith(jsExample);
    writeText.mockRestore();
    Object.assign(navigator, { clipboard });
  });

  test("copy to clipboard fail", async () => {
    const clipboard = { ...navigator.clipboard };
    const writeText = jest.fn(() => Promise.reject());
    Object.assign(navigator, {
      clipboard: {
        writeText,
      },
    });
    render(
      <SnippetWithTheme language={SnippetLanguage.JAVASCRIPT}>
        {jsExample}
      </SnippetWithTheme>
    );
    fireEvent.click(screen.getByLabelText(/copy to clipboard/i));
    await screen.findByText(/unable to copy/i);
    expect(writeText).toHaveBeenCalledWith(jsExample);
    writeText.mockRestore();
    Object.assign(navigator, { clipboard });
  });

  test("copy tooltip hover", () => {
    render(
      <SnippetWithTheme language={SnippetLanguage.JAVASCRIPT}>
        {jsExample}
      </SnippetWithTheme>
    );
    userEvent.hover(screen.getByLabelText(/copy to clipboard/i));
    expect(screen.getByText(/copy to clipboard/i)).toBeVisible();
    userEvent.unhover(screen.getByLabelText(/copy to clipboard/i));
    expect(screen.getByText(/copy to clipboard/i)).not.toBeVisible();
  });

  test("copy tooltip tab", () => {
    render(
      <SnippetWithTheme language={SnippetLanguage.JAVASCRIPT}>
        {jsExample}
      </SnippetWithTheme>
    );
    userEvent.tab();
    expect(screen.getByText(/copy to clipboard/i)).toBeVisible();
    userEvent.tab();
    expect(screen.getByText(/copy to clipboard/i)).not.toBeVisible();
  });

  test("snippet accessibility violations", async () => {
    const { container } = render(
      <SnippetWithTheme
        label="JS"
        language={SnippetLanguage.JAVASCRIPT}
        wrapLines
      >
        {jsExample}
      </SnippetWithTheme>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
