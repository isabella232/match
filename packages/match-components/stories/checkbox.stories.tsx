import * as React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Formik } from "formik";
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
    additional: "Additional Text",
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
  <Formik initialValues={{}} onSubmit={() => {}}>
    <Checkbox {...args} />
  </Formik>
);

export const SingleCheckbox = Template.bind({});

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

export const CheckedCheckbox = Template.bind({});

CheckedCheckbox.argTypes = SingleCheckbox.argTypes;

export const AnchorInLabel = Template.bind({});
AnchorInLabel.args = {
  disabled: true,
  label: 'This text <a href="https://www.twilio.com/">has a link</a>',
  additional: "Additional text cannot contain links, should it?",
};
AnchorInLabel.argTypes = SingleCheckbox.argTypes;

export const LongLabel = Template.bind({});
LongLabel.args = {
  disabled: true,
  label:
    "Really really really really really really really really really really really really really really really really long label",
  additional:
    "Really really really really really really really really really really really really really really really really long help text",
};
LongLabel.argTypes = SingleCheckbox.argTypes;

export const Error: Story<CheckboxProps> = (args: CheckboxProps) => (
  <Formik initialValues={{}} validateOnMount onSubmit={() => {}}>
    <Checkbox {...args} />
  </Formik>
);
Error.args = {};
