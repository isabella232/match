import * as React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Anchor, AnchorProps, AnchorVariant, AnchorTarget } from "../src";

export default {
  title: "Components/Anchor",
  component: Anchor,
  args: {
    children: "Ahoy",
    noUnderline: false,
    target: Object.values(AnchorTarget).shift(),
    rel: "",
    href: "https://twilio.com",
  },
  argTypes: {
    children: { table: { disable: true } },
    variant: { table: { disable: true } },
    noUnderline: {
      control: { type: "boolean" },
    },
    href: {
      control: { type: "text" },
    },
    target: {
      control: { type: "select", options: Object.values(AnchorTarget) },
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
