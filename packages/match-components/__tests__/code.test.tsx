import { render } from "@testing-library/react";
import { axe } from "jest-axe";
import * as React from "react";
import { withTheme } from "@twilio-labs/match-themes";
import { Code, CodeVariant } from "../src/code";

const CodeWithTheme = withTheme()(Code);

describe("Code", () => {
  test("dark variant", async () => {
    const { container } = render(
      <CodeWithTheme
        variant={CodeVariant.DARK}
      >{`console.log("Hello world!");`}</CodeWithTheme>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  test("light variant", async () => {
    const { container } = render(
      <CodeWithTheme
        variant={CodeVariant.LIGHT}
      >{`console.log("Hello world!");`}</CodeWithTheme>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
