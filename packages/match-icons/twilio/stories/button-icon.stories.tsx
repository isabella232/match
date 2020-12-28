import * as React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { DownloadIcon, ExpandIcon } from "../src";
import { Button, ButtonProps, ButtonSize } from "@twilio-labs/match-components";

export default {
  title: "Components/Button",
  component: Button,
  args: {
    children: "Ahoy",
    disabled: false,
    fullWidth: false,
    href: "",
  },
  argTypes: {
    children: { table: { disable: true } },
    variant: { table: { disable: true } },
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

export const IconWithText = Template.bind({});
IconWithText.args = {
  children: ["Download ", <DownloadIcon decorative key="downloadicon" />],
};

export const IconOnly = Template.bind({});
IconOnly.args = {
  size: ButtonSize.ICON,
  children: <ExpandIcon title="Expand" />,
};
IconOnly.argTypes = {
  size: { control: { disable: true } },
};
