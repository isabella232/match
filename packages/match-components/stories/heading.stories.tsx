import { Story, Meta } from "@storybook/react/types-6-0";
import * as React from "react";
import { Heading, HeadingProps, HeadingVariant } from "../src";

export default {
  title: "Components/Heading",
  component: Heading,
  args: {
    children: "Ahoy World!",
    inverse: false,
    variant: "h1",
  },
  argTypes: {
    children: { table: { disable: true } },
    inverse: { table: { disable: true } },
    variant: {
      options: Object.values(HeadingVariant),
      control: { type: "select" },
    },
  },
} as Meta;

const Template: Story<HeadingProps> = (args) => <Heading {...args} />;

export const Primary = Template.bind({});

export const Inverse = Template.bind({});
Inverse.args = {
  inverse: true,
};
Inverse.parameters = {
  backgrounds: { default: "Darkest" },
};
