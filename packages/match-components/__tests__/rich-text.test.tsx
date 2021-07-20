import { render, screen } from "@testing-library/react";
import * as React from "react";

import { withTheme } from "@twilio-labs/match-themes";
import * as TwilioDesignTokens from "@twilio-labs/match-tokens/twilio";

import { RichText } from "../src";

const RichTextWithTheme = withTheme()(RichText);

const content = `
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>
<hr/>
<code>Code</code>
<p>Paragraph</p>
<a href="/about">Link</a>
<ol>
  <li>ol li</li>
</ol>
<ul>
  <li>ul li</li>
</ul>
`.trim();

describe("RichText", () => {
  test("renders all components", () => {
    render(<RichTextWithTheme>{content}</RichTextWithTheme>);
    expect(screen.getByText(/heading 1/i).tagName.toLowerCase()).toEqual("h1");
    expect(screen.getByText(/heading 2/i).tagName.toLowerCase()).toEqual("h2");
    expect(screen.getByText(/heading 3/i).tagName.toLowerCase()).toEqual("h3");
    expect(screen.getByText(/heading 4/i).tagName.toLowerCase()).toEqual("h4");
    expect(screen.getByText(/heading 5/i).tagName.toLowerCase()).toEqual("h5");
    expect(screen.getByText(/heading 6/i).tagName.toLowerCase()).toEqual("h6");
    expect(screen.getByText(/paragraph/i).tagName.toLowerCase()).toEqual("p");
    expect(screen.getByText(/link/i).tagName.toLowerCase()).toEqual("a");
    expect(screen.getByText(/ol li/i).tagName.toLowerCase()).toEqual("li");
    expect(screen.getByText(/ul li/i).tagName.toLowerCase()).toEqual("li");
  });

  test("renders inverse components", () => {
    render(<RichTextWithTheme inverse>{content}</RichTextWithTheme>);
    expect(screen.getByText(/link/i)).toHaveStyle({
      color: TwilioDesignTokens.colors.white,
    });
    expect(screen.getByText(/heading 1/i)).toHaveStyle({
      color: TwilioDesignTokens.textColors.inversePrimary,
    });
  });
});
