import { Story, Meta } from "@storybook/react/types-6-0";
import * as React from "react";

import { Code, CodeVariant } from "../src";

export default {
  title: "Components/Code",
  component: Code,
} as Meta;

export const Dark: Story = () => (
  <Code variant={CodeVariant.DARK}>create-react-app</Code>
);

export const Light: Story = () => (
  <Code variant={CodeVariant.LIGHT}>create-react-app</Code>
);
