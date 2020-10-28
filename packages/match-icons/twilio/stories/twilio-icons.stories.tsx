import * as React from "react";
import { uid } from "react-uid";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Icon, IconProps } from "@twilio-labs/match-components";
import { TwilioDesignTokens } from "@twilio-labs/match-tokens";
import * as Icons from "../src";

const DS = new TwilioDesignTokens();

export default {
  title: "Icons/Twilio",
  component: Icon,
  args: {
    color: "gray80",
    size: "base",
    decorative: false,
  },
  argTypes: {
    color: {
      control: { type: "select", options: Object.keys(DS.swatch) },
    },
    size: {
      control: { type: "select", options: Object.keys(DS.iconSize) },
    },
    decorative: {
      control: { type: "boolean" },
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
      .filter((Icon) => typeof Icon === "object")
      .map((Icon) => (
        <div key={uid(Icon)}>
          <Icon {...args} />
        </div>
      ))}
  </div>
);
