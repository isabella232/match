import * as React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Heading, HeadingProps, HeadingVariant } from "../src";

export default {
  title: "Components/Heading",
  component: Heading,
  args: {
    children: "Ahoy World!",
    variant: "h1",
  },
  argTypes: {
    children: { table: { disable: true } },
    variant: {
      control: { type: "select", options: Object.values(HeadingVariant) },
    },
  },
} as Meta;

const Template: Story<HeadingProps> = (args) => <Heading {...args} />;

export const Primary = Template.bind({});
