import * as React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Radio, RadioProps, RadioSize } from "../src";

export default {
  title: "Components/Radio Button",
  component: Radio,
  args: {
    name: "example",
    value: "example",
    label: "Label",
    additional: "Additional",
    error: false,
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
    additional: {
      control: { type: "text" },
    },
    error: {
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

const Template: Story<RadioProps> = (args) => (
  <div>
    <Radio value="1" {...args} />
  </div>
);

export const Primary = Template.bind({});
