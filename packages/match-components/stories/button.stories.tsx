import * as React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
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
  },
  argTypes: {
    children: { table: { disable: true } },
    size: {
      control: { type: "select", options: Object.values(ButtonSize) },
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
