import { render } from "@testing-library/react";
import { axe } from "jest-axe";
import * as React from "react";
import { withTheme } from "@twilio-labs/match-themes";
import { DownloadIcon } from "@twilio-labs/match-icons-twilio";
import { Anchor } from "../src";

const AnchorWithTheme = withTheme()(Anchor);

describe("Button", () => {
  test("renders external anchor", () => {
    const { getByText } = render(
      <AnchorWithTheme href="https://twilio.com">Click Me</AnchorWithTheme>
    );
    expect(getByText(/click me/i).getAttribute("target")).toEqual("_blank");
    expect(getByText(/click me/i).getAttribute("rel")).toEqual(
      "noreferrer noopener"
    );
  });

  test("renders external anchor with override", () => {
    const { getByText } = render(
      <AnchorWithTheme href="https://twilio.com" target="_self" rel="noopener">
        Click Me
      </AnchorWithTheme>
    );
    expect(getByText(/click me/i).getAttribute("target")).toEqual("_self");
    expect(getByText(/click me/i).getAttribute("rel")).toEqual("noopener");
  });

  test("renders external anchor with override", () => {
    const { getByText } = render(
      <AnchorWithTheme href="https://twilio.com" target="_self">
        Click Me
      </AnchorWithTheme>
    );
    expect(getByText(/click me/i).getAttribute("target")).toEqual("_self");
    expect(getByText(/click me/i).getAttribute("rel")).toEqual(
      "noreferrer noopener"
    );
  });

  test("accessibility violations", async () => {
    const { container } = render(
      <AnchorWithTheme href="/home">Click Me</AnchorWithTheme>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  test("accessibility violations with icon", async () => {
    const { container } = render(
      <AnchorWithTheme href="https://twilio.com" download icon={DownloadIcon}>
        Download
      </AnchorWithTheme>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
