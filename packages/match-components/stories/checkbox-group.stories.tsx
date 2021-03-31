import * as React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Formik } from "formik";
import {
  Checkbox,
  CheckboxSize,
  CheckboxGroup,
  CheckboxGroupProps,
} from "../src";

export default {
  title: "Components/CheckboxGroup",
  component: Checkbox,
  args: {
    label: "Label",
    additional: "Additional Text",
    size: CheckboxSize.NORMAL,
    required: false,
    readOnly: false,
    disabled: false,
    horizontal: false,
  },
} as Meta;

const Template: Story<CheckboxGroupProps> = (args) => (
  <Formik initialValues={{}} onSubmit={() => {}}>
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
  </Formik>
);

export const Group = Template.bind({});
Group.args = {
  label: "Subscribe to sub-processor notifications for:",
  additional: "Select one or more options",
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
  horizontal: {
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

export const Required: Story<CheckboxGroupProps> = (args) => (
  <Formik initialValues={{ checking: "" }} onSubmit={() => {}}>
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
  </Formik>
);

Required.args = {
  required: true,
};

export const Error: Story<CheckboxGroupProps> = (args) => (
  <Formik
    validateOnMount
    initialValues={{}}
    initialTouched={{ checking: true }}
    onSubmit={() => {}}
  >
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
  </Formik>
);

Error.args = {
  required: true,
};
