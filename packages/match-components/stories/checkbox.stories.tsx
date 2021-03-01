import * as React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import {
  Checkbox,
  CheckboxProps,
  CheckboxSize,
  // CheckboxGroup,
  // CheckboxGroupProps,
} from "../src";

export default {
  title: "Components/Checkbox",
  component: Checkbox,
  args: {
    name: "example name",
    value: "example",
    label: "Label",
    additional: "Additional",
    error: false,
    readOnly: false,
    disabled: false,
    size: CheckboxSize.NORMAL,
  },
  argTypes: {
    name: {
      table: { disable: true },
    },
  },
} as Meta;

const Template: Story<CheckboxProps> = (args) => (
  <div>
    <Checkbox value="1" {...args} />
  </div>
);

export const SingleCheckbox = Template.bind({});
SingleCheckbox.args = {
  label: "Label",
  additional: "additional",
  error: false,
};
SingleCheckbox.argTypes = {
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
    control: { type: "select", options: Object.values(CheckboxSize) },
  },
};
