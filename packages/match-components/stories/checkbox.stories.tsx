import { Story, Meta } from "@storybook/react/types-6-0";
import { Formik } from "formik";
import * as React from "react";
import { Anchor, Checkbox, CheckboxProps, CheckboxSize } from "../src";

export default {
  title: "Components/Checkbox",
  component: Checkbox,
  args: {
    name: "example",
    value: "example",
    label: "Label",
    additional: "Additional Text",
    readOnly: false,
    disabled: false,
    size: CheckboxSize.NORMAL,
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
    readOnly: {
      control: { type: "boolean" },
    },
    disabled: {
      control: { type: "boolean" },
    },
    size: {
      options: Object.values(CheckboxSize),
      control: { type: "select" },
    },
  },
} as Meta;

const Template: Story<CheckboxProps> = (args) => (
  <Formik initialValues={{}} onSubmit={() => {}}>
    <Checkbox {...args} />
  </Formik>
);

export const SingleCheckbox = Template.bind({});

export const AnchorInLabel = Template.bind({});
AnchorInLabel.args = {
  label: <Anchor href="https://www.twilio.com/">This text is a link</Anchor>,
  additional: "More about this",
};

export const LongLabel = Template.bind({});
LongLabel.args = {
  disabled: true,
  label:
    "Really really really really really really really really really really really really really really really really long label",
  additional:
    "Really really really really really really really really really really really really really really really really long help text",
};

export const RequiredError: Story<CheckboxProps> = (args: CheckboxProps) => (
  <Formik
    validateOnMount
    initialValues={{}}
    initialTouched={{ example: true }}
    onSubmit={() => {}}
  >
    <Checkbox {...args} />
  </Formik>
);
RequiredError.args = {
  label: "Do you accept the terms of service?",
  required: true,
};
