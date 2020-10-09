import * as React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Anchor, AnchorProps, AnchorVariant } from "../src";

export default {
  title: "Components/Anchor",
  component: Anchor,
  args: {
    children: "Ahoy",
    target: "",
    rel: "",
    href: "",
  },
  argTypes: {
    children: { table: { disable: true } },
    variant: { table: { disable: true } },
    href: {
      control: { type: "text" },
    },
    target: {
      control: { type: "text" },
    },
    rel: {
      control: { type: "text" },
    },
  },
} as Meta;

const Template: Story<AnchorProps> = (args) => <Anchor {...args} />;

export const Text = Template.bind({});
Text.args = {
  variant: AnchorVariant.TEXT,
};

export const Inverse = Template.bind({});
Inverse.args = {
  variant: AnchorVariant.INVERSE,
};
Inverse.parameters = {
  backgrounds: { default: "Darkest" },
};

export const NoUnderline = Template.bind({});
NoUnderline.args = {
  variant: AnchorVariant.NOUNDERLINE,
};

export const NoUnderlineInverse = Template.bind({});
NoUnderlineInverse.args = {
  variant: AnchorVariant.NOUNDERLINEINVERSE,
};
NoUnderlineInverse.parameters = {
  backgrounds: { default: "Darkest" },
};
