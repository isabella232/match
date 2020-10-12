import * as React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Anchor, AnchorProps, AnchorVariant } from "../src";

export default {
  title: "Components/Anchor",
  component: Anchor,
  args: {
    children: "Ahoy",
    noUnderline: false,
    target: "",
    rel: "",
    href: "/flex",
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

export const External = Template.bind({});
External.args = {
  variant: AnchorVariant.TEXT,
  href: "https://twilio.com",
  target: "_blank",
  rel: "noreferrer noopener",
  children: "Default for an External Link in Text Variant",
};
