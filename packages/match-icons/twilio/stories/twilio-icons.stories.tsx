import * as React from "react";
import { uid } from "react-uid";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Icon, IconProps } from "@twilio-labs/match-primitives";
import { colors, iconSizes } from "@twilio-labs/match-tokens";
import * as Icons from "../src";

export default {
  title: "Icons/Twilio",
  component: Icon,
  args: {
    color: "gray80",
    size: "base",
  },
  argTypes: {
    color: {
      control: { type: "select", options: Object.keys(colors) },
    },
    size: {
      control: { type: "select", options: Object.keys(iconSizes) },
    },
  },
} as Meta;

export const AllIcons: Story<IconProps> = (args) => (
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(10, 1fr)",
      gridGap: "1rem",
      justifyItems: "center",
    }}
  >
    {Object.values(Icons)
      .filter((Icon) => typeof Icon === "function")
      .map((Icon) => (
        <div key={uid(Icon)}>
          <Icon title={Icon.name} {...args} />
        </div>
      ))}
  </div>
);
