import * as React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Formik } from "formik";
import {
  Radio,
  RadioProps,
  RadioSize,
  RadioGroup,
  RadioGroupProps,
} from "../src";

export default {
  title: "Components/Radio Button",
  component: Radio,
  args: {
    name: "group",
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
  },
} as Meta;

const Template: Story<RadioProps> = (args) => (
  <div>
    <Formik initialValues={{ example: "" }} onSubmit={() => {}}>
      <Radio value="1" {...args} />
    </Formik>
  </div>
);

export const SingleRadio = Template.bind({});
SingleRadio.args = {
  label: "Label",
  additional: "additional",
  error: false,
};
SingleRadio.argTypes = {
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
};

export const Group: Story<RadioGroupProps> = ({
  groupLabel,
  ...props
}: RadioGroupProps) => (
  <Formik
    initialValues={{ group: "" }}
    validateOnMount
    initialTouched={{ group: true }}
    onSubmit={() => {}}
  >
    <RadioGroup name="group" groupLabel={groupLabel} {...props}>
      <Radio name="group" value="apples" label="apples" />
      <Radio name="group" value="bananas" label="bananas" />
      <Radio name="group" value="oranges" label="oranges" />
    </RadioGroup>
  </Formik>
);
Group.args = {
  groupLabel: "Select your favorite fruit:",
  required: true,
  vertical: false,
  error: "",
  helper: "",
};
Group.argTypes = {
  groupLabel: {
    control: { type: "text" },
  },
  required: {
    control: { type: "boolean" },
  },
  vertical: {
    control: { type: "boolean" },
  },
  error: {
    control: { type: "text" },
  },
  helper: {
    control: { type: "text" },
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
};
