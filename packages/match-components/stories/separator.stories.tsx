import * as React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Separator, SeparatorProps, SeparatorVariant } from "../src";
import { space } from "@twilio-labs/match-tokens";

export default {
  title: "Components/Separator",
  component: Separator,
  args: {
    marginY: "scale20",
  },
  argTypes: {
    variant: { table: { disable: true } },
    marginY: {
      control: { type: "select", options: Object.keys(space) },
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
