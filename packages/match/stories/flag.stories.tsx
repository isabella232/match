import * as React from "react";
import { uid } from "react-uid";
import { Story, Meta } from "@storybook/react/types-6-0";
import * as flags from "@twilio-labs/match-flags";
import type { FlagType, FlagProps } from "@twilio-labs/match-flags";

export default {
  title: "Foundation/Flags",
  args: {
    size: "normal",
    decorative: false,
  },
  argTypes: {
    size: {
      options: ["small", "normal", "large"],
      control: {
        type: "select",
      },
    },
    decorative: {
      control: {
        type: "boolean",
      },
    },
  },
} as Meta;

const Template: Story<FlagProps> = (args) => (
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(10, 1fr)",
      gridGap: "1rem",
      justifyItems: "center",
    }}
  >
    {Object.values(flags).map((Flag: FlagType) => (
      <div key={uid(Flag)}>
        <Flag {...args} />
      </div>
    ))}
  </div>
);

export const Small = Template.bind({});
Small.args = {
  size: "small",
};

export const Normal = Template.bind({});
Normal.args = {
  size: "normal",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
};
