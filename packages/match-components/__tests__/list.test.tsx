import * as React from "react";
import { render } from "@testing-library/react";
import { axe } from "jest-axe";
import { withTheme } from "@twilio-labs/match-themes";
import { List, ListItem, ListVariant } from "../src";

const ListWithTheme = withTheme()(List);

describe("List", () => {
  test("bulleted variant", async () => {
    const { container } = render(
      <ListWithTheme variant={ListVariant.BULLETED}>
        <ListItem>Ahoy</ListItem>
        <ListItem>World</ListItem>
      </ListWithTheme>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  test("numbered variant", async () => {
    const { container } = render(
      <ListWithTheme variant={ListVariant.NUMBERED}>
        <ListItem>Ahoy</ListItem>
        <ListItem>World</ListItem>
      </ListWithTheme>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  test("icon variant", async () => {
    const { container } = render(
      <ListWithTheme variant={ListVariant.ICON}>
        <ListItem>Ahoy</ListItem>
        <ListItem>World</ListItem>
      </ListWithTheme>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
