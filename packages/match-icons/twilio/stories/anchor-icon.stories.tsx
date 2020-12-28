import * as React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import {
  Anchor,
  AnchorProps,
  AnchorVariant,
} from "@twilio-labs/match-components";
import { OutboundIcon } from "../src";

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

const Template: Story<AnchorProps> = (args) => <Anchor {...args} />;

export const PrimaryIcon = Template.bind({});
PrimaryIcon.args = {
  children: ["Ahoy ", <OutboundIcon decorative key="outboundicon" />],
};

export const InverseIcon = Template.bind({});
InverseIcon.args = {
  variant: AnchorVariant.INVERSE,
  children: ["Ahoy ", <OutboundIcon decorative key="outboundicon" />],
};
InverseIcon.parameters = {
  backgrounds: { default: "Darkest" },
};

export const TextIcon = Template.bind({});
TextIcon.args = {
  variant: AnchorVariant.TEXT,
  children: ["Ahoy ", <OutboundIcon decorative key="outboundicon" />],
};
