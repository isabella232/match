import * as React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Anchor, AnchorProps, AnchorVariant, AnchorTarget } from "../src";

export default {
  title: "Components/Anchor",
  component: Anchor,
  args: {
    children: "Ahoy",
    noUnderline: false,
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
  },
} as Meta;

const Template: Story<AnchorProps> = (args) => (
  <p style={{ color: "#1F304C" }}>
    <Anchor {...args} />
  </p>
);

export const Primary = Template.bind({});
Primary.args = {
  variant: AnchorVariant.PRIMARY,
};

export const Inverse = Template.bind({});
Inverse.args = {
  variant: AnchorVariant.INVERSE,
};
Inverse.parameters = {
  backgrounds: { default: "Darkest" },
};

export const Text = Template.bind({});
Text.args = {
  variant: AnchorVariant.TEXT,
};

export const External = Template.bind({});
External.args = {
  variant: AnchorVariant.PRIMARY,
  href: "https://twilio.com",
  children: "Default for an External Link in Text Variant",
};
