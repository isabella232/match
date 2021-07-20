import { Story, Meta } from "@storybook/react/types-6-0";
import * as React from "react";

import { space } from "@twilio-labs/match-tokens";

import { Card, CardProps, CardVariant } from "../src";

export default {
  title: "Components/Card",
  component: Card,
  args: {
    children: "Ahoy",
    padding: "scale100",
    margin: "scale100",
  },
  argTypes: {
    children: { table: { disable: true } },
    variant: { table: { disable: true } },
    padding: {
      options: Object.keys(space),
      control: { type: "select" },
    },
    margin: {
      options: Object.keys(space),
      control: { type: "select" },
    },
  },
} as Meta;

const Template: Story<CardProps> = (args) => <Card {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: CardVariant.PRIMARY,
};

export const Inverse = Template.bind({});
Inverse.args = {
  variant: CardVariant.INVERSE,
};
Inverse.parameters = {
  backgrounds: { default: "Darkest" },
};

export const Border = Template.bind({});
Border.args = {
  variant: CardVariant.BORDER,
};
