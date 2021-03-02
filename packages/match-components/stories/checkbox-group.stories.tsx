import * as React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import {
  Checkbox,
  CheckboxSize,
  CheckboxGroup,
  CheckboxGroupProps,
} from "../src";

export default {
  title: "Components/Checkbox",
  component: Checkbox,
  args: {
    name: "Example Checkbox Group",
    label: "Label",
    additional: "Additional Text",
    size: CheckboxSize.NORMAL,
    required: true,
    readOnly: false,
    disabled: false,
  },
  argTypes: {
    name: {
      table: { disable: true },
    },
  },
} as Meta;

const Template: Story<CheckboxGroupProps> = (args) => (
  <CheckboxGroup {...args}>
    <Checkbox
      name="checking"
      value={"value1"}
      label={"test label 1"}
      additional={"Additional text"}
    />
    <Checkbox
      name="checking"
      value={"value2"}
      label={"test label 2"}
      additional={"Additional text"}
    />
    <Checkbox
      name="checking"
      value={"value3"}
      label={"test label 3"}
      additional={"Additional text"}
    />
  </CheckboxGroup>
);

export const Group = Template.bind({});
Group.args = {
  label: "Subscribe to sub-processor notifications for:",
  additional: "Select one or more options",
  error: false,
};
Group.argTypes = {
  label: {
    control: { type: "text" },
  },
  additional: {
    control: { type: "text" },
  },
  required: {
    control: { type: "boolean" },
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
