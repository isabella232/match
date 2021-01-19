import * as React from "react";
import { render } from "@testing-library/react";
import { axe } from "jest-axe";
import { withTheme } from "@twilio-labs/match-themes";
import { Paragraph, ParagraphVariant } from "../src";

const ParagraphWithTheme = withTheme()(Paragraph);

describe("Paragraph", () => {
  test("accessibility violations", async () => {
    const { container } = render(
      <ParagraphWithTheme variant={ParagraphVariant.MEDIUM}>
        Ahoy, world!
      </ParagraphWithTheme>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
