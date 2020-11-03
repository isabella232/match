import * as React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Card, CardProps, CardVariant } from "../src";
import { TwilioDesignTokens } from "@twilio-labs/match-tokens";

const DS = new TwilioDesignTokens();

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
      control: { type: "select", options: Object.keys(DS.space) },
    },
    margin: {
      control: { type: "select", options: Object.keys(DS.space) },
    },
  },
} as Meta;

const Template: Story<CardProps> = (args) => (
  <p>
    <Card {...args} />
  </p>
);

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
