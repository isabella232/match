import * as React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Card, CardProps, CardVariant } from "../src";

export default {
  title: "Components/Card",
  component: Card,
  args: {
    children: "Ahoy",
  },
  argTypes: {
    children: { table: { disable: true } },
    variant: { table: { disable: true } },
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
