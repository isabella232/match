import { Story, Meta } from "@storybook/react/types-6-0";
import * as React from "react";

import { space } from "@twilio-labs/match-tokens";

import { Separator, SeparatorProps, SeparatorVariant } from "../src";

export default {
  title: "Components/Separator",
  component: Separator,
  args: {
    marginY: "scale20",
  },
  argTypes: {
    variant: { table: { disable: true } },
    marginY: {
      options: Object.keys(space),
      control: { type: "select" },
    },
  },
} as Meta;

const Template: Story<SeparatorProps> = (args) => <Separator {...args} />;

export const Primary = Template.bind({});

export const Inverse = Template.bind({});
Inverse.args = {
  variant: SeparatorVariant.INVERSE,
};
Inverse.parameters = {
  backgrounds: { default: "Darkest" },
};
