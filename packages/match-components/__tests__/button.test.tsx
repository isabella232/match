import { render } from "@testing-library/react";
import { axe } from "jest-axe";
import * as React from "react";
import { withTheme } from "@twilio-labs/match-themes";
import { DownloadIcon } from "@twilio-labs/match-icons-twilio";
import { Button, ButtonSize } from "../src";

const ButtonWithTheme = withTheme()(Button);

describe("Button", () => {
  test("renders as a button", () => {
    const { getByText } = render(<ButtonWithTheme>Click Me</ButtonWithTheme>);
    expect(getByText(/click me/i).tagName.toLowerCase()).toBe("button");
  });

  test("renders as an anchor", () => {
    const { getByText } = render(
      <ButtonWithTheme href="https://twilio.com">Click Me</ButtonWithTheme>
    );
    expect(getByText(/click me/i).tagName.toLowerCase()).toBe("a");
  });

  test("icon missing text warning", async () => {
    const warn = jest.spyOn(console, "warn").mockImplementation(() => {});
    render(
      <ButtonWithTheme size={ButtonSize.ICON} icon={DownloadIcon}>
        <></>
      </ButtonWithTheme>
    );
    expect(warn).toBeCalled();
    warn.mockRestore();
  });

  test("accessibility violations", async () => {
    const { container } = render(<ButtonWithTheme>Click Me</ButtonWithTheme>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  test("accessibility violations small", async () => {
    const { container } = render(
      <ButtonWithTheme size={ButtonSize.SMALL}>Click Me</ButtonWithTheme>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  test("accessibility violations with prompt", async () => {
    const { container } = render(
      <ButtonWithTheme prompt>Click Me</ButtonWithTheme>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  test("accessibility violations with icon", async () => {
    const { container } = render(
      <ButtonWithTheme icon={DownloadIcon}>Click Me</ButtonWithTheme>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  test("accessibility violations with small icon", async () => {
    const { container } = render(
      <ButtonWithTheme size={ButtonSize.SMALL} icon={DownloadIcon}>
        Click Me
      </ButtonWithTheme>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  test("accessibility violations icon only", async () => {
    const { container } = render(
      <ButtonWithTheme size={ButtonSize.ICON} icon={DownloadIcon}>
        Click Me
      </ButtonWithTheme>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
