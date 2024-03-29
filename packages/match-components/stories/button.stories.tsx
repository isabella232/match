import { Story, Meta } from "@storybook/react/types-6-0";
import * as React from "react";

import { DownloadIcon, ExpandIcon } from "@twilio-labs/match-icons/twilio";

import { Button, ButtonProps, ButtonVariant, ButtonSize } from "../src";

export default {
  title: "Components/Button",
  component: Button,
  args: {
    children: "Ahoy",
    disabled: false,
    fullWidth: false,
    href: "",
    size: Object.values(ButtonSize).shift(),
    prompt: false,
  },
  argTypes: {
    children: { table: { disable: true } },
    variant: { table: { disable: true } },
    icon: { table: { disable: true } },
    size: {
      options: Object.values(ButtonSize),
      control: { type: "select" },
    },
    prompt: {
      control: { type: "boolean" },
    },
    disabled: {
      control: { type: "boolean" },
    },
    fullWidth: {
      control: { type: "boolean" },
    },
    href: {
      control: { type: "text" },
    },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: ButtonVariant.PRIMARY,
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: ButtonVariant.SECONDARY,
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  variant: ButtonVariant.TERTIARY,
};
Tertiary.parameters = {
  backgrounds: { default: "Darkest" },
};

export const Inverse = Template.bind({});
Inverse.args = {
  variant: ButtonVariant.INVERSE,
};
Inverse.parameters = {
  backgrounds: { default: "Twilio Blue" },
};

export const IconWithText = Template.bind({});
IconWithText.args = {
  icon: DownloadIcon,
};

export const IconOnly = Template.bind({});
IconOnly.args = {
  size: ButtonSize.ICON,
  children: "Expand",
  icon: ExpandIcon,
};
IconOnly.argTypes = {
  size: { control: { disable: true } },
};
