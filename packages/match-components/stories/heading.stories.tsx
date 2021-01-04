import * as React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Heading, HeadingProps, HeadingVariant } from "../src";

export default {
  title: "Components/Heading",
  component: Heading,
  args: {
    children: "Ahoy World!",
    color: "inherit",
    variant: "h1",
  },
  argTypes: {
    children: { table: { disable: true } },
    color: { table: { disable: true } },
    variant: {
      control: { type: "select", options: Object.values(HeadingVariant) },
    },
  },
} as Meta;

const Template: Story<HeadingProps> = ({ color, ...args }) => (
  <div style={{ color }}>
    <Heading {...args} />
  </div>
);

export const Primary = Template.bind({});

export const Inverse: Story<HeadingProps> = Template.bind({});
Inverse.args = {
  color: "#fff",
};
Inverse.parameters = {
  backgrounds: { default: "Darkest" },
};
