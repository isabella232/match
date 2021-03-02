import * as React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import {
  Checkbox,
  CheckboxSize,
  CheckboxGroup,
  CheckboxGroupProps
} from "../src";

export default {
  title: "Components/CheckboxGroup",
  component: Checkbox,
  args: {
    name: "Example Checkbox Group",
    label: "Label",
    additional: "Additional Text",
    size: CheckboxSize.NORMAL,
  },
  argTypes: {
    name: {
      table: { disable: true },
    },
  },
} as Meta;

const Template: Story<CheckboxGroupProps> = (args) => (
  <CheckboxGroup {...args}>
    <Checkbox name="checking" value={"value1"} label={'test label 1'} additional={'Additional text'} />
    <Checkbox name="checking" value={"value2"} label={'test label 2'} additional={'Additional text'} />
    <Checkbox name="checking" value={"value3"} label={'test label 3'} additional={'Additional text'} />
  </CheckboxGroup>
);

export const CheckboxGroupStory = Template.bind({});
CheckboxGroupStory.args = {
  label: "Label",
  additional: "Additional Text",
  error: false,
};
CheckboxGroupStory.argTypes = {
  label: {
    control: { type: "text" },
  },
  additional: {
    control: { type: "text" },
  },
  checked: {
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
