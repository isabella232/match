import * as React from "react";
import addons, { types } from "@storybook/addons";

import { ADDON_ID } from "./constants";

import { ThemeSwitcherTool } from "./tool";

addons.register(ADDON_ID, () => {
  addons.add(ADDON_ID, {
    title: "match / theme-switcher",
    type: types.TOOL,
    match: ({ viewMode }) => viewMode === "story",
    render: () => <ThemeSwitcherTool />,
  });
});
