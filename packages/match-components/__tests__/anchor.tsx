import "jest-styled-components";
import * as React from "react";
import { render } from "@testing-library/react";
import { axe } from "jest-axe";
import { withTheme } from "@twilio-labs/match-themes";
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

  test("snapshot", () => {
    const { container } = render(
      <AnchorWithTheme href="https://twilio.com">Click Me</AnchorWithTheme>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test("accessibility violations", async () => {
    const { container } = render(
      <AnchorWithTheme href="https://twilio.com">Click Me</AnchorWithTheme>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
