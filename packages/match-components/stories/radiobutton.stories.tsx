import * as React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Radio, RadioButtonProps, RadioSize } from "../src";

export default {
  title: "Components/Radio Button",
  component: Radio,
  args: {
    name: "example",
    value: "example",
    label: "Label",
    helper: "Helper text.",
    error: "",
    required: false,
    readOnly: false,
    disabled: false,
    size: RadioSize.NORMAL,
  },
  argTypes: {
    name: {
      table: { disable: true },
    },
    label: {
      control: { type: "text" },
    },
    helper: {
      control: { type: "text" },
    },
    error: {
      control: { type: "text" },
    },
    required: {
      control: { type: "boolean" },
    },
    readOnly: {
      control: { type: "boolean" },
    },
    disabled: {
      control: { type: "boolean" },
    },
    size: {
      control: { type: "select", options: Object.values(RadioSize) },
    },
  },
} as Meta;

const Template: Story<RadioButtonProps> = (args) => (
  <div>
    <Radio value="1" {...args} />
  </div>
);

export const Primary = Template.bind({});
