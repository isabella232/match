import { Story, Meta } from "@storybook/react/types-6-0";
import * as React from "react";

import { OutboundIcon } from "@twilio-labs/match-icons/twilio";

import { Anchor, AnchorProps, AnchorVariant } from "../src";

export default {
  title: "Components/Anchor",
  component: Anchor,
  args: {
    children: "Ahoy",
    noUnderline: false,
  },
  argTypes: {
    children: { table: { disable: true } },
    variant: { table: { disable: true } },
    icon: { table: { disable: true } },
    noUnderline: {
      control: { type: "boolean" },
    },
    href: {
      control: { type: "text" },
    },
  },
} as Meta;

const Template: Story<AnchorProps> = (args) => <Anchor {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: AnchorVariant.PRIMARY,
  href: "/flex",
};

export const Inverse = Template.bind({});
Inverse.args = {
  variant: AnchorVariant.INVERSE,
  href: "/flex",
};
Inverse.parameters = {
  backgrounds: { default: "Darkest" },
};

export const Text = Template.bind({});
Text.args = {
  variant: AnchorVariant.TEXT,
  href: "/flex",
};

export const External = Template.bind({});
External.args = {
  variant: AnchorVariant.PRIMARY,
  href: "https://twilio.com",
  children: "Default for an External Link in Text Variant",
};

export const Button = Template.bind({});
Button.args = {
  variant: AnchorVariant.PRIMARY,
};

export const PrimaryIcon = Template.bind({});
PrimaryIcon.args = {
  icon: OutboundIcon,
  href: "/flex",
};

export const InverseIcon = Template.bind({});
InverseIcon.args = {
  variant: AnchorVariant.INVERSE,
  icon: OutboundIcon,
  href: "/flex",
};
InverseIcon.parameters = {
  backgrounds: { default: "Darkest" },
};

export const TextIcon = Template.bind({});
TextIcon.args = {
  variant: AnchorVariant.TEXT,
  icon: OutboundIcon,
  href: "/flex",
};
